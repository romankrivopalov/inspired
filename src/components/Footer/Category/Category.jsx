import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';
import { useSelector } from 'react-redux';

const Category = () => {
  const { categories, genderList } = useSelector(state => state.navigation);

  return (
    <div className={s.category}>
      <h2 className={s.categoryTitle}>
        Каталог
      </h2>

      <ul className={s.categoryList}>
        {
          genderList.map(category => (
            <li key={category} >
              <h3 className={s.categorySubtitle}>
                <NavLink className={s.categoryLink} to={`/catalog/${category}`}>
                  {categories[category].title}
                </NavLink>
              </h3>

              <ul className={s.categorySublist}>
                {
                  categories[category].list.map(item => (
                    <li key={item.slug}>
                      <NavLink className={s.categoryLink} to={`/catalog/${category}/${item.slug}`}>
                        {item.title}
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
}

export default Category;
