import { Formik, Form } from 'formik';
import Container from '../Layout/Container/Container.jsx';
import s from './Search.module.scss'
import { useSelector } from 'react-redux';

const Search = () => {
  const { openSearch } = useSelector(state => state.search);

  return ( openSearch &&
    <div className={s.search}>
      <Container>
        <Formik>
          <Form className={s.form}>
            <input className={s.input} type='search' name='search' placeholder='Найти...' />

            <button className={s.btn} type='submit'>Искать</button>
          </Form>
        </Formik>
      </Container>
    </div>
  )
};

export default Search;
