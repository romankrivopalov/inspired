import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveGender } from '../../../features/navigationSlice.js';
import Category from './Category/Category.jsx';
import Gender from './Gender/Gender.jsx';
import Container from '../../Layout/Container/Container.jsx';

const Navigation = ({ list }) => {
  const dispatch = useDispatch(),
        location = useLocation(),
        gender = location.pathname.split('/')[1] || 'women';

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch])

  return (
    <nav>
      <Container>
        <Gender list={list} />
        <Category list={list} />
      </Container>
    </nav>
  )
}

export default Navigation;
