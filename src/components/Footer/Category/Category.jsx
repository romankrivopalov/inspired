import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';

const Category = ({ list }) => (
  <div className={s.category}>
    <h2 className={s.categoryTitle}>
      Каталог
    </h2>

    <ul className={s.categoryList}>
      {
        list.map(item => (
          <li key={item.link} >
            <h3 className={s.categorySubtitle}>
              <NavLink className={s.categoryLink} to={item.link}>
                {item.title}
              </NavLink>
            </h3>

            <ul className={s.categorySublist}>
              {
                item.categories.map(category => (
                  <li key={category.link}>
                    <NavLink className={s.categoryLink} to={`${item.link}/${category.link}`}>
                      {category.title}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Category;
