import s from './Contacts.module.scss';

const Contacts = () => (
  <div className={s.contacts}>
    <a className={s.contactsLink} href="mailto:inspired@gmail.com">
      Inspired@gmail.com
    </a>
    <a className={s.contactsLink} href="tel:+79304902620">
      8 930 490 26 20
    </a>
  </div>
)

export default Contacts;
