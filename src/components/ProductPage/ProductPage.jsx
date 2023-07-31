import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../features/productSlice.js";
import { fetchData } from "../../features/goodsSlice.js";
import { addToCart } from "../../features/cartSlice.js";
import { useParams } from "react-router";
import { API_URL } from "../../const.js";
import Container from "../Layout/Container/Container.jsx";
import ColorList from "../ColorList/ColorList.jsx";
import Count from "../Count/Count.jsx";
import ProductSize from "../ProductSize/ProductSize.jsx";
import Goods from "../Goods/Goods.jsx";
import BtnLike from "../BtnLike/BtnLike.jsx";
import cn from "classnames";
import s from "./ProductPage.module.scss";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(state => state.product);
  const { gender, category, colors } = product;
  const [ count, setCount ] = useState(1);
  const [ selectedSize, setSelectedSize ] = useState('');
  const [ selectedColor, setSelectedColor ] = useState('');
  const { colorList } = useSelector(state => state.color);

  useEffect(() => {
    if (colorList?.length && colors?.length) {
      setSelectedColor(colorList.find(color => color.id === colors[0].title));
    }
  }, [colorList, colors]);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchData({ gender, category, count: 4, top: true, exclude: id }))
  }, [dispatch, gender, category, id]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  const handleSizeChange = e => {
    setSelectedSize(e.target.value)
  }

  const handleColorChange = e => {
    setSelectedColor(e.target.value)
  }

  return (
    <>
      <section className={s.card}>
        <Container className={s.container}>
          <img className={s.image} src={`${API_URL}/${product.pic}`} alt={product.title} />
          <form className={s.content} onSubmit={e => {
            e.preventDefault();

            dispatch(addToCart({
              id, color: selectedColor, size: selectedSize, count
            }))
          }}>
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
                colors={colors}
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
              />
            </div>

            <ProductSize
              size={product.size}
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange} />

            <div className={s.description}>
              <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
              <p className={s.descriptionText}>{product.description}</p>
            </div>

            <div className={s.control}>
              <Count
                className={s.count}
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement} />

              <button className={s.addCart} type="submit">
                В корзину
              </button>

              <BtnLike id={id} />
            </div>
          </form>
        </Container>
      </section>

      <Goods title={"Вам также может понравиться"} />
    </>
  )
}

export default ProductPage;
