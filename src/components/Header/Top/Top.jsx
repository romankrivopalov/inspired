import Container from '../../Layout/Container/Container.jsx';
import cn from 'classnames';
import s from './Top.module.scss';
import logo from '/src/assets/logo.svg';

const Top = () => (
  <div className={s.top}>
    <Container className={s.topContainer}>
      <a className={cn(s.topLink, s.topPhone)} href="tel:89304902620">
        8 930 490 26 20
      </a>

      <a className={s.topLogo} href="/">
        <img src={logo} alt="Логотип inspired, в виде надписи. " />
      </a>

      <div className={s.topNavigation}>
        <ul className={s.topNavList}>
          <li>
            <button className={s.topLink}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.875 16.75C13.2242 16.75 16.75 13.2242 16.75 8.875C16.75 4.52576 13.2242 1 8.875 1C4.52576 1 1 4.52576 1 8.875C1 13.2242 4.52576 16.75 8.875 16.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.4431 14.4438L18.9994 19.0002" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </li>
          <li>
            <a className={s.topLink}>
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5787 4.75H3.42122C3.23665 4.75 3.05856 4.81806 2.92103 4.94115C2.7835 5.06425 2.69619 5.23373 2.67581 5.41718L1.34248 17.4172C1.33083 17.522 1.34143 17.6281 1.37357 17.7286C1.40572 17.829 1.4587 17.9216 1.52904 18.0002C1.59939 18.0788 1.68553 18.1417 1.78182 18.1847C1.87812 18.2278 1.98241 18.25 2.08789 18.25H19.912C20.0175 18.25 20.1218 18.2278 20.2181 18.1847C20.3144 18.1417 20.4005 18.0788 20.4708 18.0002C20.5412 17.9216 20.5942 17.829 20.6263 17.7286C20.6585 17.6281 20.6691 17.522 20.6574 17.4172L19.3241 5.41718C19.3037 5.23373 19.2164 5.06425 19.0789 4.94115C18.9413 4.81806 18.7632 4.75 18.5787 4.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.25 4.75C7.25 3.75544 7.64509 2.80161 8.34835 2.09835C9.05161 1.39509 10.0054 1 11 1C11.9946 1 12.9484 1.39509 13.6517 2.09835C14.3549 2.80161 14.75 3.75544 14.75 4.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </li>
          <li>
            <a className={s.topLink}>
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 18.25C11 18.25 1.625 13 1.625 6.62501C1.62519 5.49826 2.01561 4.40635 2.72989 3.53493C3.44416 2.66351 4.4382 2.06636 5.54299 1.84501C6.64778 1.62367 7.79514 1.79179 8.78999 2.32079C9.78484 2.84979 10.5658 3.70702 11 4.74673L11 4.74673C11.4342 3.70702 12.2152 2.84979 13.21 2.32079C14.2049 1.79179 15.3522 1.62367 16.457 1.84501C17.5618 2.06636 18.5558 2.66351 19.2701 3.53493C19.9844 4.40635 20.3748 5.49826 20.375 6.62501C20.375 13 11 18.25 11 18.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </div>
)

export default Top;
