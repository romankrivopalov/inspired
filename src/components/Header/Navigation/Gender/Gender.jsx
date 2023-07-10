import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Gender.module.scss';
import cn from 'classnames';

const Gender = () => {
  const { activeGender, genderList, categories } = useSelector(state => state.navigation)

  return (
    <ul className={s.gender}>
      {genderList.map(gender => (
        <li key={gender} className={s.genderItem}>
          <NavLink
            className={({ isActive }) =>
              cn(s.genderLink, (isActive || gender === activeGender) && s.genderLinkActive)
            }
            to={gender}>
            {categories[gender].title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Gender;

