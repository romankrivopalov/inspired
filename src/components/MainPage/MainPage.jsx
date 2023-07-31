import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData, fetchGender } from '../../features/goodsSlice.js';
import { setActiveGender } from "../../features/navigationSlice.js";
import Goods from "../Goods/Goods.jsx";
import Banner from "../Banner/Banner.jsx";
import usePageFromSearchParams from "../../hooks/usePageFromSearchParams.js";

const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
  const { activeGender, categories, genderList } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];
  const categoryData = genderData?.list.find(item => item.slug === category);
  const page = usePageFromSearchParams(dispatch);

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
      const params = { gender, category }

      if (page) {
        params.page = page
      }
      dispatch(fetchData(params));
      return;
    }

    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [dispatch, gender, category, page])

  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods
        title={categoryData?.title} />
    </>
  )
}

export default MainPage;
