import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Container from '../Layout/Container/Container.jsx';
import s from './Search.module.scss'
import { useNavigate } from 'react-router-dom';
import { toggleSearch } from '../../features/searchSlice.js';

const Search = () => {
  const dispatch = useDispatch();
  const { openSearch } = useSelector(state => state.search);

  const initialValues = {
    search: '',
  }

  const validationSchema = Yup.object({
    search: Yup.string().required('Поле обязательно для заполнения'),
  })

  const navigate = useNavigate();

  const handleSubmit = ({ search }, { resetForm }) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);

      // очистка формы
      resetForm();

      dispatch(toggleSearch(false));
    }
  }

  return ( openSearch &&
    <div className={s.search}>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field className={s.input} type='search' name='search' placeholder='Найти...' />
            <ErrorMessage className={s.error} name='search' component={'p'} />

            <button className={s.btn} type='submit'>Искать</button>
          </Form>
        </Formik>
      </Container>
    </div>
  )
};

export default Search;
