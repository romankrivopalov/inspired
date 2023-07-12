import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory, fetchGender } from '../../features/goodsSlice.js';
import { setActiveGender } from "../../features/navigationSlice.js";
import Goods from "../Goods/Goods.jsx";
import Banner from "../Banner/Banner.jsx";

const MainPage = () => {
  const { gender, category } = useParams(),
        dispatch = useDispatch(),
        { activeGender, categories } = useSelector(state => state.navigation),
        genderData = categories[activeGender];

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
      <Banner data={genderData?.banner} />
      <Goods
        categoryData={genderData?.list.find(item => item.slug === category)} />
    </>
  )
}

export default MainPage;
