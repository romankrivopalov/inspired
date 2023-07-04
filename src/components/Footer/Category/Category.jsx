import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';

const list = [
  {
    link: 'women',
    title: 'Женщины',
    categories: [
      { link: 'bras', title: 'Бюстгалтеры'},
      { link: 'panties', title: 'Трусы'},
      { link: 'socks', title: 'Носки'},
      { link: 'bathrobes', title: 'Халаты'},
      { link: 'thermal', title: 'Термобелье'},
      { link: 'pijamas', title: 'Пижамы'},
    ]
  },
  {
    link: 'men',
    title: 'Мужчины',
    categories: [
      { link: 'panties', title: 'Трусы'},
      { link: 'socks', title: 'Носки'},
      { link: 'bathrobes', title: 'Халаты'},
      { link: 'thermal', title: 'Термобелье'},
    ]
  }
]

const Category = () => (
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
