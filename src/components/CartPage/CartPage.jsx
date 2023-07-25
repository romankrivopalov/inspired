import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart/Cart.jsx";
import Order from "./Order/Order.jsx";
import { useEffect, useState } from "react";
import { fetchAll } from "../../features/goodsSlice.js";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, countItems } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state => state.goods);
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map(item => item.id) }));

      setCount(countItems);
    }
  }, [dispatch, cartItems, count, countItems]);

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      <Order cartItems={cartItems} />
    </>
  )
};

export default CartPage;
