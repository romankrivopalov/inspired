import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './routes/Root.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from './features/navigationSlice.js';
import { fetchColors } from './features/colorSlice.js';
import MainPage from './components/MainPage/MainPage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ProductPage from './components/ProductPage/ProductPage.jsx';
import FavoritePage from './components/FavoritePage/FavoritePage.jsx';
import CartPage from './components/CartPage/CartPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/cart" element={<CartPage />} />

      <Route path="/catalog/:gender/:category?" element={<MainPage />} />
      <Route path="/product/:id" element={<ProductPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch])

  return <RouterProvider router={router}></RouterProvider>
}

export default App;
