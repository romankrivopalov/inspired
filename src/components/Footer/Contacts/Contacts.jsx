import s from './contacts.module.scss';

const Contacts = () => (
  <div className={s.contacts}>
    <a href="mailto:inspired@gmail.com">
      Inspired@gmail.com
    </a>
    <a href="tel:+79304902620">
      8 930 490 26 20
    </a>
  </div>
)

export default Contacts;
