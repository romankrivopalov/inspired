import Container from '../Layout/Container/Container.jsx';
import Category from './Category/Category.jsx';
import Social from './Social/Social.jsx';
import Contacts from './Contacts/Contacts.jsx';
import s from './Footer.module.scss';

const Footer = () => (
  <footer>
    <Container className={s.container}>
      <Category />
      <Social />
      <Contacts />

      <p className={s.copyright}>
        &copy; INSPIRED, 2023
      </p>
      <div className={s.development}>
        <div className={s.developmentList}>
          <p>
            Designer: <a className={s.link} target='_blank' rel='noopener noreferrer' href="https://t.me/Mrshmallowww">Anastasia Ilina</a>
          </p>
          <p>
            Developer: <a className={s.link} target='_blank' rel='noopener noreferrer' href="https://github.com/romankrivopalov">Roman Krivopalov</a>
          </p>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer;
