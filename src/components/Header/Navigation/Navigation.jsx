import Category from './Category/Category.jsx';
import Gender from './Gender/Gender.jsx';
import Container from '../../Layout/Container/Container.jsx';

const Navigation = ({ list }) => (
  <nav>
    <Container>
      <Gender list={list} />
      <Category list={list} />
    </Container>
  </nav>
)

export default Navigation;
