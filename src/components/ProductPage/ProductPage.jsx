import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/productSlice.js";
import { useParams } from "react-router";
import { API_URL } from "../../const.js";
import Container from "../Layout/Container/Container.jsx";
import s from "./ProductPage.module.scss";
import cn from "classnames";
import ColorList from "../ColorList/ColorList.jsx";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(state => state.product);
  const [ selectedColor, setSelectedColor ] = useState('');

  const handleColorChange = e => {
    setSelectedColor(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <img className={s.image} src={`${API_URL}/${product.pic}`} alt={product.title} />
        <form className={s.content}>
          <h2 className={s.title}>
            {product.title}
          </h2>

          <p className={s.price}>
            руб {product.price}
          </p>

          <div className={s.vendorCode}>
            <span className={s.subtitle}>Артикул</span>
            <span className={s.id}>{product.id}</span>
          </div>

          <div className={s.color}>
            <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
            <ColorList
              colors={product.colors}
              selectedColor={selectedColor}
              handleColorChange={handleColorChange}
            />
          </div>
        </form>
      </Container>
    </section>
  )
}

export default ProductPage;
