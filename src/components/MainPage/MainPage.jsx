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
        { activeGender, categories, genderList } = useSelector(state => state.navigation),
        genderData = categories[activeGender],
        categoryData = genderData?.list.find(item => item.slug === category);

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    } else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, genderList, dispatch])

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
        categoryData={categoryData} />
    </>
  )
}

export default MainPage;
