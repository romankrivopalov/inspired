import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import { ReactComponent as Like } from '../../assets/icon-like.svg';
import ColorList from '../ColorList/ColorList';
import s from './Product.module.scss';

const Product = ({ id, pic, title, price, colors }) => (
  <article className={s.product}>
    <NavLink className={s.link} to={`product/${id}`}>
      <img className={s.image} src={`${API_URL}/${pic}`} alt={title} />
      <h3 className={s.title}>
        {title}
      </h3>
    </NavLink>

    <div className={s.row}>
      <p className={s.price}>
        руб {price}
      </p>

      <button>
        <Like />
      </button>
    </div>

    <ColorList colors={colors} />
  </article>
)

export default Product;
