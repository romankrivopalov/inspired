import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>404</h2>
      <p>{error?.message || 'Неизвестая ошибка'}</p>
    </div>
  )
}

export default ErrorPage;
