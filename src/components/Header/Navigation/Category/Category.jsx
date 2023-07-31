import cn from 'classnames';
import s from './Category.module.scss';

import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Category = () => {
  const { activeGender, categories } = useSelector(state => state.navigation);

  return (
    <ul className={s.category}>
      {
        categories[activeGender]?.list?.map(category => (
          <li key={category.slug}>
            <NavLink
              className={({ isActive }) => cn(s.categoryLink, isActive && s.categoryLinkActive)}
              to={`/catalog/${activeGender}/${category.slug}`}>
              {category.title}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

export default Category;
