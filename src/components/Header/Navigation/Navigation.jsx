import Category from './Category/category.jsx';
import Gender from './Gender/Gender.jsx';

const Navigation = () => (
  <nav>
    <div className="container">
      <Gender />
      <Category />
    </div>
  </nav>
)

export default Navigation;
