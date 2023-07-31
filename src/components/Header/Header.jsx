import Top from './Top/Top.jsx';
import Search from '../Search/Search.jsx';
import Navigation from './Navigation/Navigation.jsx';
import s from './Header.module.scss';


const Header = () => (
  <header className={s.header}>
    <Top />
    <Search />
    <Navigation />
  </header>
)

export default Header;
