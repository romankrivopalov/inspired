export const API_URL = 'https://functional-lofty-relish.glitch.me';

export const GOODS_URL = `${API_URL}/api/goods`; // GET // получить список всех товаров с пагинацией
export const CATEGORY_URL = `${API_URL}/api/categories`; // GET // получить список категорий
export const COLORS_URL = `${API_URL}/api/colors`; // GET // получить список цветов
export const ORDER_URL = `${API_URL}/api/order`; // POST // оформить заказ

export const LOCAL_STORAGE_TITLE = {
  favorites: 'favorites',
  cart: 'cart'
}
