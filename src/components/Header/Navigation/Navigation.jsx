import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveGender } from '../../../features/navigationSlice.js';
import Category from './Category/Category.jsx';
import Gender from './Gender/Gender.jsx';
import Container from '../../Layout/Container/Container.jsx';

const Navigation = ({ list }) => {
  const dispatch = useDispatch(),
        location = useLocation();

  useEffect(() => {
    const gender = location.pathname.split('/')[1] || 'women';

    dispatch(setActiveGender(gender));
  }, [location.pathname, dispatch])

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
