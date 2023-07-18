import { useSelector } from "react-redux";
import Container from "../Layout/Container/Container.jsx";
import Product from "../Product/Product.jsx";
import s from './Goods.module.scss';

const Goods = ({ title }) => {
  const { goodsList } = useSelector(state => state.goods);

  return (
    <section>
      <Container>
        <h2 className={s.title}>{title ?? 'Новинки'}</h2>
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
