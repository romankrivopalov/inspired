import { useDispatch, useSelector } from "react-redux";
import Goods from "../Goods/Goods.jsx";
import { useEffect } from "react";
import { fetchAll } from "../../features/goodsSlice.js";
import s from './SearchPage.module.scss';
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);

  let [ searchParams ] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('q');

    const params = { search };

    dispatch(fetchAll(params));
  }, [dispatch, searchParams]);

  return (
    goodsList.length
    ? <Goods title="Избранное" />
    : <h3 className={s.empty}>По запросу {searchParams.get('q')} ничего не найдено</h3>
  )
};

export default SearchPage;
