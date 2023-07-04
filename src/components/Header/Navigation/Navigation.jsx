import Category from './Category/category.jsx';
import Gender from './Gender/Gender.jsx';
import Container from '../../Layout/Container/Container.jsx';

const Navigation = () => (
  <nav>
    <Container>
      <Gender />
      <Category />
    </Container>
  </nav>
)

export default Navigation;
