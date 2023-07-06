import cn from 'classnames';
import s from './Category.module.scss';

import { NavLink, useLocation } from "react-router-dom";

const Category = ({ list }) => {
  const location = useLocation(),
        gender = location.pathname.split('/')[1] || 'women',
        categoriesList = list.find(i => i.link === gender);

  return (
    <ul className={s.category}>
      {
        categoriesList.categories.map(category => (
          <li key={category.link}>
            <NavLink
              className={({ isActive }) => cn(s.categoryLink, isActive && s.categoryLinkActive)}
              to={`${gender}/${category.link}`}>
              {category.title}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default Category;
