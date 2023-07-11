import { useParams } from "react-router";
import Container from "../Layout/Container/Container.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory, fetchGender } from '../../features/goodsSlice.js';
import s from './MainPage.module.scss';
import Product from "../Product/Product.jsx";
import { setActiveGender } from "../../features/navigationSlice.js";


const MainPage = () => {
  const { gender, category } = useParams(),
        { goodsList } = useSelector(state => state.goods),
        dispatch = useDispatch();

  // const { activeGender, categories } = useSelector(state => state.navigation);

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
    <section>
      <Container>
        <h2 className={s.title}>Новинки</h2>
        <ul className={s.list}>
          {goodsList.map(item => (
            <li key={item.id} >
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default MainPage;
