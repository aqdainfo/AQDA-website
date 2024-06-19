import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/images/header-logo.svg';
import SearchBox from '../../components/searchBox';
import data from '../../global';

const Header = () => {
  const social = data.global.social;

  const [hamburger, setHamburger] = useState(false);
  const [filter, setFilter] = useState(false);

  const {pathname} = useLocation();

  const handleHamburger = useCallback(() => {
    if (filter) {
      setHamburger(false);
    } else {
      setHamburger(!hamburger);
    }
    
    setFilter(false);
  }, [hamburger, filter])

  const handleFilter = useCallback(() => {
    setFilter(true);
    setHamburger(false);
  }, [])

  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img src={logo} alt="AQDA" />
      </Link>

      <Link to="/" className="header__text">{ data.global.logoText }</Link>

      <div
        className={ hamburger || filter ? 'hamburger open' : 'hamburger' } 
        onClick={ () => { handleHamburger(); } }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className="header__menus">
        <div className="header__nav header__nav--desktop">
          <Link to="/explore" className={`header__nav__item${ pathname === '/explore' ? ' current' : ''}`}>Explore</Link>
          <Link to="/about" className={`header__nav__item${ pathname === '/about' ? ' current' : ''}`}>About</Link>
          <Link to="/contact" className={`header__nav__item${ pathname === '/contact' ? ' current' : ''}`}>Contact</Link>
        </div>
        
        <div className="header__search">
          <button className="btn btn--pink" onClick={ () => { handleFilter(); } }>Search</button>
        </div>
      </div>

      <div className={`header__nav header__nav--mobile${hamburger ? ' open' : ''}`}>
        <Link to="/" onClick={handleHamburger} className={`header__nav__item${ pathname === '/' ? ' current' : ''}`}>Home</Link>
        <Link to="/explore" onClick={handleHamburger} className={`header__nav__item${ pathname === '/explore' ? ' current' : ''}`}>Explore</Link>
        <Link to="/about" onClick={handleHamburger} className={`header__nav__item${ pathname === '/about' ? ' current' : ''}`}>About</Link>
        <Link to="/contact" onClick={handleHamburger} className={`header__nav__item${ pathname === '/contact' ? ' current' : ''}`}>Contact</Link>
        <div className="header__social">
          <span className="header__social__label">Follow us</span>
          <div className="header__social__links">
            <a href={social.twitter} rel="noreferrer" target="_blank" className="header__social__link header__social__link--twitter">
              <svg width="43" height="36" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.4993 33.0476C28.7119 33.0476 36.4889 21.2615 36.4889 11.058C36.4889 10.7264 36.4889 10.3948 36.4739 10.0632C37.981 8.97808 39.2923 7.60655 40.3322 6.05416C38.9456 6.67211 37.4535 7.07904 35.8861 7.27497C37.4837 6.32546 38.7045 4.80321 39.2923 2.9946C37.8002 3.88383 36.1423 4.51685 34.3789 4.8635C32.9622 3.35632 30.9576 2.42188 28.7421 2.42188C24.4768 2.42188 21.0103 5.88838 21.0103 10.1537C21.0103 10.7565 21.0856 11.3443 21.2062 11.9171C14.7856 11.6006 9.08853 8.51086 5.27538 3.83862C4.61222 4.98407 4.23543 6.31038 4.23543 7.72713C4.23543 10.4099 5.60696 12.7762 7.67179 14.1628C6.40576 14.1175 5.21509 13.7709 4.17514 13.1982C4.17514 13.2283 4.17514 13.2585 4.17514 13.3037C4.17514 17.0415 6.84284 20.1764 10.3696 20.8848C9.72154 21.0656 9.04331 21.156 8.33494 21.156C7.83757 21.156 7.35528 21.1108 6.88806 21.0204C7.86772 24.095 10.7313 26.3257 14.1074 26.3859C11.4548 28.4658 8.12394 29.7017 4.50672 29.7017C3.88878 29.7017 3.27084 29.6716 2.66797 29.5962C6.07418 31.7666 10.1436 33.0476 14.4993 33.0476Z" fill="#191718"/>
              </svg>
            </a>

            <a href={social.youtube} rel="noreferrer" target="_blank" className="header__social__link header__social__link--youtube">
              <svg width="50" height="36" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.9455 7.78644C48.9455 7.78644 48.467 4.35545 46.9932 2.84893C45.127 0.866144 43.0406 0.856424 42.0836 0.73979C35.2313 0.234375 24.9432 0.234375 24.9432 0.234375H24.924C24.924 0.234375 14.6359 0.234375 7.78359 0.73979C6.82656 0.856424 4.74023 0.866144 2.87402 2.84893C1.4002 4.35545 0.93125 7.78644 0.93125 7.78644C0.93125 7.78644 0.433594 11.82 0.433594 15.8439V19.6151C0.433594 23.639 0.92168 27.6726 0.92168 27.6726C0.92168 27.6726 1.4002 31.1036 2.86445 32.6101C4.73066 34.5929 7.18067 34.5248 8.27168 34.7387C12.1955 35.1177 24.9336 35.2344 24.9336 35.2344C24.9336 35.2344 35.2313 35.2149 42.0836 34.7192C43.0406 34.6026 45.127 34.5929 46.9932 32.6101C48.467 31.1036 48.9455 27.6726 48.9455 27.6726C48.9455 27.6726 49.4336 23.6487 49.4336 19.6151V15.8439C49.4336 11.82 48.9455 7.78644 48.9455 7.78644ZM19.8709 24.193V10.2066L33.1066 17.2241L19.8709 24.193Z" fill="#191718"/>
              </svg>
            </a>

            <a href={social.linkedin} rel="noreferrer" target="_blank" className="header__social__link header__social__link--linkedin">
              <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M30.8925 30.0245H25.6677V21.8462C25.6677 19.8966 25.6325 17.3891 22.9506 17.3891C20.2335 17.3891 19.8185 19.5149 19.8185 21.7073V30.0245H14.5977V13.2099H19.6051V15.508H19.6776C20.3764 14.1867 22.0795 12.793 24.6224 12.793C29.9156 12.793 30.8925 16.2733 30.8925 20.8029V30.0245ZM8.70416 10.9128C7.02456 10.9128 5.66992 9.55437 5.66992 7.88074C5.66992 6.20906 7.02456 4.85059 8.70416 4.85059C10.374 4.85059 11.7325 6.20906 11.7325 7.88074C11.7325 9.55437 10.374 10.9128 8.70416 10.9128ZM6.08398 30.0226H11.3166V13.208H6.08398V30.0226ZM33.494 0H3.46488C2.03194 0 0.867188 1.13729 0.867188 2.54079V32.6916C0.867188 34.0951 2.03194 35.2343 3.46488 35.2343H33.494C34.9309 35.2343 36.1015 34.0951 36.1015 32.6916V2.54079C36.1015 1.13729 34.9309 0 33.494 0Z" fill="#191718"/>
              </svg>
            </a>

            <a href={social.facebook} rel="noreferrer" target="_blank" className="header__social__link header__social__link--facebook">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M33.8255 0H2.47912C1.4055 0 0.535156 0.870342 0.535156 1.94396V33.2904C0.535156 34.364 1.4055 35.2343 2.47912 35.2343H19.3673V21.6084H14.7808V16.2746H19.3673V12.3502C19.3673 7.80015 22.1496 5.3216 26.2076 5.3216C27.5751 5.31861 28.9418 5.38756 30.3021 5.52814V10.2848H27.5076C25.2964 10.2848 24.8651 11.3297 24.8651 12.8727V16.2685H30.1502L29.4637 21.6023H24.8347V35.2343H33.8255C34.8991 35.2343 35.7695 34.364 35.7695 33.2904V1.94396C35.7695 0.870342 34.8991 0 33.8255 0Z" fill="#191718"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <SearchBox open={filter} setOpen={setFilter}/>
    </header>

  )
}

export default Header;