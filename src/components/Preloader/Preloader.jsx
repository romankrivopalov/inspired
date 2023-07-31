import { Puff } from 'react-loader-spinner';

const style = {
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 0',
};

const Preloader = () => (
  <div style={style}>
    <Puff
      width={120}
      height={120}
      color='#8a8a8a' />
  </div>
)

export default Preloader;
