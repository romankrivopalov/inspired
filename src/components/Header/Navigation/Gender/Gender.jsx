import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Gender.module.scss';
import cn from 'classnames';

const Gender = ({ list }) => {
  const gender = useSelector(state => state.navigation.activeGender)

  return (
    <ul className={s.gender}>
      {list.map(item => (
        <li key={item.link} className={s.genderItem}>
          <NavLink
            className={({ isActive }) =>
              cn(s.genderLink, (isActive || gender === item.link) && s.genderLinkActive)
            }
            to={item.link}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Gender;

