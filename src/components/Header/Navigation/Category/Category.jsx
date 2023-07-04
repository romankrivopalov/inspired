import s from './Category.module.scss';

import { NavLink } from "react-router-dom";

const Category = ({ list }) => {
  const women = list[0].categories;

  return (
    <ul className={s.category}>
      {
        women.map(category => (
          <li key={category.link}>
            <NavLink className={s.categoryLink} to={`women/${category.link}`}>
              {category.title}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default Category;
