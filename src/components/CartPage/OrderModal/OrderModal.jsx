import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../const";
import { clearCart } from "../../../features/cartSlice";
import s from "./OrderModal.module.scss";

export const OrderModal = () => {
  const dispatch = useDispatch();

  const { order: { values, order, id, totalPrice }
  } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state => state.goods);

  const handleCloseModal = () => {
    dispatch(clearCart());
  }

  const handleModalClick = (e) => {
    // событие не поднимается выше
    e.stopPropagation();
  }

  return (
    <div className={s.modal}>
      <div className={s.body} onClick={handleModalClick}>
        <h2 className={s.title}>Заказ оформлен № {id}</h2>

        <div className={s.description}>
          <p>Спасибо за выбор нашего магазина! </p>
          <p>Здесь вы можете посмотреть детали вашего заказа.</p>
        </div>

        <ul className={s.customer}>
          <li className={s.customerItem}>
            <span className={s.customerTitle}>Получатель</span>
            <span className={s.customerData}>{values.fio}</span>
          </li>
          { values.delivery === 'delivery' &&
            <li className={s.customerItem}>
              <span className={s.customerTitle}>Адрес доставки</span>
              <span className={s.customerData}>{values.address}</span>
            </li>
          }
          <li className={s.customerItem}>
            <span className={s.customerTitle}>Телефон</span>
            <span className={s.customerData}>{values.phone}</span>
          </li>
          <li className={s.customerItem}>
            <span className={s.customerTitle}>E-mail</span>
            <span className={s.customerData}>{values.email}</span>
          </li>
          <li className={s.customerItem}>
            <span className={s.customerTitle}>Способ получения</span>
            <span className={s.customerData}>
              {values.delivery === 'delivery' ? 'Доставка' : 'Самовывоз'}
            </span>
          </li>
        </ul>

        <ul className={s.goods}>
          {order.map(item => {
            const product = goodsList.find(product => product.id === item.id);

            return (
              <li
                className={s.goodsItem}
                key={`${item.id}-${item.color}-${item.size}`} >
                <img className={s.goodsImg} src={`${API_URL}/${product.pic}`} alt={product.title} />
                <p className={s.goodsCount}>X{item.count}</p>
              </li>
            )
          })}
        </ul>

        <div className={s.total}>
          <p>ИТОГО:</p>
          <p>руб {totalPrice}</p>
        </div>

        <button className={s.close} onClick={handleCloseModal}></button>
      </div>
    </div>
  )
}
