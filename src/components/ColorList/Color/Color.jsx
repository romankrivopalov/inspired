import { useRef } from 'react';
import s from './Color.module.scss';

const Color = ({ color, check }) => {
  const checkState = useRef(check)

  const handleColorClick = () => {
    checkState.current = !check
  }

  return (
    <li
      className={`${s.color} ${check ? s.colorCheck : ''}`}
      style={{backgroundColor: color}}
      onClick={handleColorClick}
      />
  )
}

export default Color;
