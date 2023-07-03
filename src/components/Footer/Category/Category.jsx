import s from './Category.module.scss';

const Category = () => (
  <div className={s.category}>
    <h2 className={s.categoryTitle}>
      Каталог
    </h2>
    <div className={s.categoryList}>
      <div>
        <h3 className={s.categorySubtitle}>
          Женщины
        </h3>
        <ul className={s.categorySublist}>
          <li>
            <a className={s.categoryLink} href="/">
              Бюстгальтеры
            </a>
          </li>
          <li>
            <a className={s.categoryLink} href="/">
              Трусы
            </a>
          </li>
          <li>
            <a className={s.categoryLink} href="/">
              Носки
            </a>
          </li>
          <li>
            <a className={s.categoryLink} href="/">
              Халаты
            </a>
          </li>
          <li>
            <a className={s.categoryLink} href="/">
              Термобелье
            </a>
          </li>
          <li>
            <a className={s.categoryLink} href="/">
              Пижамы
            </a>
          </li>
        </ul>
        </div>

        <div>
        <h3 className={s.categorySubtitle}>
          Мужчины
        </h3>
        <ul className={s.categorySublist}>
          <li>
            <a className={s.categoryLink} href="/">
              Трусы
            </a>
          </li>
          <li>
            <a className={s.categoryLink} href="/">
              Носки
            </a>
          </li>
          <li>
            <a className={s.categoryLink} href="/">
              Халаты
            </a>
          </li>
          <li>
            <a className={s.categoryLink} href="/">
              Термобелье
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Category;
