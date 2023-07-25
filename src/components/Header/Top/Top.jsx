import { NavLink } from 'react-router-dom';
import Container from '../../Layout/Container/Container.jsx';
import cn from 'classnames';
import s from './Top.module.scss';
import logo from '/src/assets/logo.svg';
import { ReactComponent as LikeSVG } from '../../../assets/icon-like.svg';
import { ReactComponent as SearchSVG } from '../../../assets/icon-search.svg';
import { ReactComponent as CartSVG } from '../../../assets/icon-cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../../../features/searchSlice.js';

const Top = () => {
  const { countItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleOpenSearch = () => {
    dispatch(toggleSearch());
  }

  return (
    <div className={s.top}>
      <Container className={s.container}>
        <a className={cn(s.topLink, s.phone)} href="tel:+79304902620">
          8 930 490 26 20
        </a>

        <NavLink className={s.logo} to="/">
          <img src={logo} alt="Логотип inspired, в виде надписи. " />
        </NavLink>

        <div className={s.navigation}>
          <ul className={s.navList}>
            <li>
              <button className={s.link} href="/" onClick={handleOpenSearch}>
                <SearchSVG />
              </button>
            </li>
            <li>
              <NavLink className={s.link} to="/cart">
                <CartSVG />
                <span className={s.linkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={cn(s.link, s.like)} to="/favorite">
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Top;
