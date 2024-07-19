import { Link } from "react-router-dom";
import MailchimpForm from "../../components/subscribe";
import data from "../../global";

import FooterLogo from '../../assets/images/footer-logo.svg';

const Footer = () => {
  const social = data.global.social;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <Link to="/" className="footer__logo__img">
            <img src={FooterLogo} alt="AQDA" />
          </Link>
        </div>
        <div className="footer__social">
          <a href={social.instagram} rel="noreferrer" target="_blank" 
            className="footer__social__link footer__social__link--twitter" aria-label="twitter">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.03702 0.205566H21.8274C26.6999 0.205566 30.6588 4.16449 30.6588 9.03701V21.8274C30.6588 24.1696 29.7284 26.4159 28.0722 28.0721C26.4159 29.7284 24.1696 30.6588 21.8274 30.6588H9.03702C4.1645 30.6588 0.205582 26.6999 0.205582 21.8274V9.03701C0.205582 6.69476 1.13603 4.44845 2.79225 2.79224C4.44847 1.13602 6.69478 0.205566 9.03702 0.205566ZM8.73249 3.25089C7.27868 3.25089 5.88442 3.82841 4.85643 4.85641C3.82843 5.88441 3.25091 7.27867 3.25091 8.73248V22.1319C3.25091 25.162 5.70239 27.6135 8.73249 27.6135H22.1319C23.5857 27.6135 24.98 27.036 26.008 26.008C27.036 24.98 27.6135 23.5857 27.6135 22.1319V8.73248C27.6135 5.70238 25.162 3.25089 22.1319 3.25089H8.73249ZM23.4262 5.53488C23.931 5.53488 24.4151 5.73541 24.772 6.09236C25.129 6.4493 25.3295 6.93342 25.3295 7.43821C25.3295 7.94301 25.129 8.42713 24.772 8.78407C24.4151 9.14101 23.931 9.34154 23.4262 9.34154C22.9214 9.34154 22.4373 9.14101 22.0803 8.78407C21.7234 8.42713 21.5229 7.94301 21.5229 7.43821C21.5229 6.93342 21.7234 6.4493 22.0803 6.09236C22.4373 5.73541 22.9214 5.53488 23.4262 5.53488ZM15.4322 7.81888C17.4514 7.81888 19.3879 8.62099 20.8156 10.0488C22.2434 11.4765 23.0455 13.413 23.0455 15.4322C23.0455 17.4514 22.2434 19.3878 20.8156 20.8156C19.3879 22.2434 17.4514 23.0455 15.4322 23.0455C13.413 23.0455 11.4766 22.2434 10.0488 20.8156C8.62101 19.3878 7.81889 17.4514 7.81889 15.4322C7.81889 13.413 8.62101 11.4765 10.0488 10.0488C11.4766 8.62099 13.413 7.81888 15.4322 7.81888ZM15.4322 10.8642C14.2207 10.8642 13.0588 11.3455 12.2022 12.2021C11.3455 13.0588 10.8642 14.2207 10.8642 15.4322C10.8642 16.6437 11.3455 17.8056 12.2022 18.6622C13.0588 19.5189 14.2207 20.0002 15.4322 20.0002C16.6437 20.0002 17.8056 19.5189 18.6623 18.6622C19.5189 17.8056 20.0002 16.6437 20.0002 15.4322C20.0002 14.2207 19.5189 13.0588 18.6623 12.2021C17.8056 11.3455 16.6437 10.8642 15.4322 10.8642Z" fill="white"/>
</svg>

          </a>

          <a href={social.youtube} rel="noreferrer" target="_blank" 
            className="footer__social__link footer__social__link--youtube" aria-label="youtube">
            <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.6912 4.95405C30.6912 4.95405 30.3885 2.79742 29.4561 1.85046C28.2754 0.604143 26.9555 0.598034 26.35 0.524721C22.0148 0.207031 15.5061 0.207031 15.5061 0.207031H15.4939C15.4939 0.207031 8.98516 0.207031 4.65 0.524721C4.04453 0.598034 2.72461 0.604143 1.54395 1.85046C0.611524 2.79742 0.314844 4.95405 0.314844 4.95405C0.314844 4.95405 0 7.48945 0 10.0188V12.3892C0 14.9185 0.308789 17.4539 0.308789 17.4539C0.308789 17.4539 0.611523 19.6105 1.53789 20.5575C2.71855 21.8038 4.26856 21.761 4.95879 21.8955C7.44121 22.1337 15.5 22.207 15.5 22.207C15.5 22.207 22.0148 22.1948 26.35 21.8832C26.9555 21.8099 28.2754 21.8038 29.4561 20.5575C30.3885 19.6105 30.6912 17.4539 30.6912 17.4539C30.6912 17.4539 31 14.9246 31 12.3892V10.0188C31 7.48945 30.6912 4.95405 30.6912 4.95405ZM12.2971 15.2667V6.47529L20.6707 10.8863L12.2971 15.2667Z" fill="white"/>
            </svg>
          </a>
        </div>
        <div className="footer__nav">
          <Link className="footer__nav__link" to="/">Home</Link>
          <Link className="footer__nav__link" to="/about">About</Link>
          <Link className="footer__nav__link" to="/explore">Explore</Link>
          <Link className="footer__nav__link" to="/contact">Contact</Link>
        </div>
        
        <MailchimpForm />
      </div>

      <div className="footer__bottom">
        <div className="footer__extra">
          <div className="footer__extra__text">{`© ${ year } ${ data.global.footerText }`}</div>
          <div className="footer__extra__nav">
            <a href="google.com" target="_blank" rel="noreferrer" className="footer__extra__link">Terms and Conditions.</a>
            <a href="google.com" target="_blank" rel="noreferrer" className="footer__extra__link">Privacy policy.</a>
            <a href="google.com" target="_blank" rel="noreferrer" className="footer__extra__link">Guidelines.</a>
          </div>
        </div>

        <div className="footer__builder" dangerouslySetInnerHTML={{__html: data.global.builder}} />

      </div>
    </footer>
  )
}

export default Footer;