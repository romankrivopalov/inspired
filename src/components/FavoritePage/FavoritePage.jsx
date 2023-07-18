import { useDispatch, useSelector } from "react-redux";
import Goods from "../Goods/Goods.jsx";
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice";

const FavoritePage = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    dispatch(fetchCategory({ list: favorites }))
  }, [dispatch, favorites]);

  return (
    <div>
      <Goods title="Избранное" />
    </div>
  )
};

export default FavoritePage;
