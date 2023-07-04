import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss';
import cn from 'classnames';

const Gender = ({ list }) => (
  <ul className={s.gender}>
    {list.map(item => (
      <li key={item.link} className={s.genderItem}>
        <NavLink
          className={({ isActive }) => cn(s.genderLink, isActive && s.genderLinkActive)} to={item.link}>
          {item.title}
        </NavLink>
      </li>
    ))}
  </ul>
)

export default Gender;

