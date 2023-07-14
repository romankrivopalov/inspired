import s from "./ProductSize.module.scss";

const ProductSize = ({ size, handleSizeChange }) => {
  return (
    <div className={s.size}>
      <p className={s.title}>Размер</p>
      <ul className={s.list}>
        {size?.map((item) => {
          const id = `size-${item}`

          return (
            <li key={item} className={s.item} >
              <input
                className={s.input}
                id={id}
                name="size"
                type="radio"
                onChange={handleSizeChange} />
              <label className={s.check} htmlFor={id}>
                {item}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductSize;
