import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategory, fetchGender } from '../../features/goodsSlice.js';
import { setActiveGender } from "../../features/navigationSlice.js";
import Goods from "../Goods/Goods.jsx";

const MainPage = () => {
  const { gender, category } = useParams(),
        dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch])

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ gender, category }));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, dispatch])

  return (
    <>
      <div></div>
      <Goods category={category} />
    </>
  )
}

export default MainPage;
