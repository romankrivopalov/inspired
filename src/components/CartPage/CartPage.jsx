import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart/Cart.jsx";
import Order from "./Order/Order.jsx";
import { useEffect, useState } from "react";
import { fetchAll } from "../../features/goodsSlice.js";
import { OrderModal } from "./OrderModal/OrderModal.jsx";
import Preloader from "../Preloader/Preloader.jsx";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, countItems } = useSelector(state => state.cart);
  const { goodsList, status } = useSelector(state => state.goods);
  const [ count, setCount ] = useState(0);
  const { orderStatus } = useSelector(state => state.cart)

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map(item => item.id) }));

      setCount(countItems);
    }
  }, [dispatch, cartItems, count, countItems]);

  return status === 'loading'
    ? (<Preloader />)
    : (<>
        <Cart cartItems={cartItems} goodsList={goodsList} />
        {cartItems.length ? <Order cartItems={cartItems} /> : ''}
        {orderStatus === 'success' && <OrderModal />}
      </>)
};

export default CartPage;
