import { useSelector } from "react-redux";
import Container from "../Layout/Container/Container.jsx";
import Product from "../Product/Product.jsx";
import s from './Goods.module.scss';

const Goods = ({ category }) => {
  const { goodsList } = useSelector(state => state.goods);
  const { activeGender, categories } = useSelector(state => state.navigation);

  const title = category
    ? categories[activeGender]?.list
      .find(item => item.slug === category)
      .title
    : 'Новинки';

  return (
    <section>
      <Container>
        <h2 className={s.title}>{title}</h2>
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

export default Goods;
