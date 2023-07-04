import Navigation from './Navigation/Navigation.jsx';
import Top from './Top/Top.jsx';

const Header = ({ list }) => (
  <header>
    <Top />
    <Navigation list={list} />
  </header>
)

export default Header;
