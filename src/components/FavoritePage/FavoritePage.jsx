import { useDispatch, useSelector } from "react-redux";
import Goods from "../Goods/Goods.jsx";
import { useEffect } from "react";
import { fetchData } from "../../features/goodsSlice.js";
import usePageFromSearchParams from "../../hooks/usePageFromSearchParams.js";
import s from './FavoritePage.module.scss';

const FavoritePage = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);

  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };

      if (page) {
        param.page = page;
      }

      dispatch(fetchData(param));
    }
  }, [dispatch, favorites, page]);

  return (
    favorites.length
    ? <Goods title="Избранное" />
    : <h3 className={s.empty}>Вы ничего не добавили в избранное</h3>
  )
};

export default FavoritePage;
