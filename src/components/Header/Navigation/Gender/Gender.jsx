import s from './Gender.module.scss';

const list = [
  { link: 'women', title: 'Женщины' },
  { link: 'men', title: 'Мужчины' },
]

const Gender = () => (
  <ul className={s.gender}>
    {list.map(item => (
      <li key={item.link} className={s.genderItem}>
        <a className={s.genderLink} href={item.link}>
          {item.title}
        </a>
      </li>
    ))}
  </ul>
)

export default Gender;

