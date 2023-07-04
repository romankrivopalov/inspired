import s from './Main.module.scss';

const Main = ({ children }) => (
  <div className={s.main}>{children}</div>
)

export default Main;
