import s from "./ProductSize.module.scss";

const ProductSize = ({ size, selectedSize, handleSizeChange }) => {
  return (
    <div className={s.size}>
      <p className={s.title}>Размер</p>
      <div className={s.list}>
        {size?.map((item) => {
          return (
            <label className={s.item} key={item} >
              <input
                className={s.input}
                name="size"
                type="radio"
                value={item}
                checked={selectedSize === item}
                onChange={handleSizeChange} />
              <span className={s.check}>
                {item}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default ProductSize;
