import cn from 'classnames';
import s from './Category.module.scss';

import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Category = ({ list }) => {
  const gender = useSelector(state => state.navigation.activeGender),
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
