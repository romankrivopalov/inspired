import { useRouteError } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchColors } from "../../features/colorSlice.js";
import { fetchNavigation } from "../../features/navigationSlice.js";
import Container from "../Layout/Container/Container.jsx";
import s from "./ErrorPage.module.scss";

const ErrorPage = () => {
  const routeError = useRouteError();
  const { status } = useSelector(state => state.statusServer);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const timerIdRef = useRef(null)

  useEffect(() => {
    if (status && location.pathname === '/404') {
      navigate('/');
    }
  }, [navigate, status, location]);

  useEffect(() => {
    if (!status && location.pathname === '/404') {
      clearInterval(timerIdRef.current);

      timerIdRef.current = setInterval(() => {
        dispatch(fetchColors());
        dispatch(fetchNavigation());
      }, 3000);
    }

    return () => clearInterval(timerIdRef.current);
  }, [dispatch, status, location])

  return (
    <Container>
      <div className={s.error}>
        <h2 className={s.title}>Произошла ошибка, попробуйте зайти позже</h2>
        <p className={s.message}>{routeError?.message || 'Неизвестая ошибка'}</p>
      </div>
    </Container>
  )
}

export default ErrorPage;
