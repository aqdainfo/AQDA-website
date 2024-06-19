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
          <a href={social.twitter} rel="noreferrer" target="_blank" 
            className="footer__social__link footer__social__link--twitter" aria-label="twitter">
            <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.7379 25.2069C21.4358 25.2069 27.8367 15.5062 27.8367 7.10804C27.8367 6.83513 27.8367 6.56222 27.8243 6.28932C29.0648 5.39616 30.1441 4.26731 31 2.9896C29.8587 3.4982 28.6307 3.83313 27.3405 3.9944C28.6555 3.21288 29.6603 1.95998 30.1441 0.471389C28.916 1.20328 27.5514 1.72429 26.1 2.0096C24.934 0.769108 23.2841 0 21.4606 0C17.95 0 15.0968 2.85314 15.0968 6.36375C15.0968 6.85994 15.1589 7.34374 15.2581 7.81513C9.97359 7.55462 5.28451 5.0116 2.14606 1.16607C1.60024 2.10884 1.29012 3.20048 1.29012 4.36655C1.29012 6.57463 2.41897 8.52221 4.11845 9.66347C3.07643 9.62625 2.09644 9.34094 1.2405 8.86955C1.2405 8.89436 1.2405 8.91917 1.2405 8.95638C1.2405 12.0328 3.43617 14.613 6.33894 15.1961C5.80552 15.3449 5.2473 15.4194 4.66427 15.4194C4.2549 15.4194 3.85794 15.3822 3.47339 15.3077C4.27971 17.8383 6.63665 19.6743 9.41537 19.7239C7.23209 21.4358 4.4906 22.453 1.51341 22.453C1.0048 22.453 0.496198 22.4282 0 22.3661C2.80352 24.1525 6.15286 25.2069 9.7379 25.2069Z" fill="white"/>
            </svg>
          </a>

          <a href={social.youtube} rel="noreferrer" target="_blank" 
            className="footer__social__link footer__social__link--youtube" aria-label="youtube">
            <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.6912 4.95405C30.6912 4.95405 30.3885 2.79742 29.4561 1.85046C28.2754 0.604143 26.9555 0.598034 26.35 0.524721C22.0148 0.207031 15.5061 0.207031 15.5061 0.207031H15.4939C15.4939 0.207031 8.98516 0.207031 4.65 0.524721C4.04453 0.598034 2.72461 0.604143 1.54395 1.85046C0.611524 2.79742 0.314844 4.95405 0.314844 4.95405C0.314844 4.95405 0 7.48945 0 10.0188V12.3892C0 14.9185 0.308789 17.4539 0.308789 17.4539C0.308789 17.4539 0.611523 19.6105 1.53789 20.5575C2.71855 21.8038 4.26856 21.761 4.95879 21.8955C7.44121 22.1337 15.5 22.207 15.5 22.207C15.5 22.207 22.0148 22.1948 26.35 21.8832C26.9555 21.8099 28.2754 21.8038 29.4561 20.5575C30.3885 19.6105 30.6912 17.4539 30.6912 17.4539C30.6912 17.4539 31 14.9246 31 12.3892V10.0188C31 7.48945 30.6912 4.95405 30.6912 4.95405ZM12.2971 15.2667V6.47529L20.6707 10.8863L12.2971 15.2667Z" fill="white"/>
            </svg>
          </a>

          <a href={social.linkedin} rel="noreferrer" target="_blank" 
          className="footer__social__link footer__social__link--linkedin" aria-label="linked in">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24.7124 24.9187H20.4121V18.1875C20.4121 16.5828 20.3831 14.519 18.1758 14.519C15.9394 14.519 15.5979 16.2686 15.5979 18.0731V24.9187H11.3008V11.0793H15.4222V12.9707H15.4818C16.057 11.8832 17.4588 10.7361 19.5517 10.7361C23.9084 10.7361 24.7124 13.6006 24.7124 17.3288V24.9187ZM6.45049 9.18859C5.06808 9.18859 3.95312 8.07047 3.95312 6.69297C3.95312 5.31709 5.06808 4.19897 6.45049 4.19897C7.82484 4.19897 8.94301 5.31709 8.94301 6.69297C8.94301 8.07047 7.82484 9.18859 6.45049 9.18859ZM4.29492 24.9173H8.60166V11.0779H4.29492V24.9173ZM26.8539 0.206787H2.13806C0.958664 0.206787 0 1.14284 0 2.29801V27.114C0 28.2691 0.958664 29.2068 2.13806 29.2068H26.8539C28.0365 29.2068 29 28.2691 29 27.114V2.29801C29 1.14284 28.0365 0.206787 26.8539 0.206787Z" fill="white"/>
            </svg>
          </a>

          <a href={social.facebook} rel="noreferrer" target="_blank" 
            className="footer__social__link footer__social__link--facebook" aria-label="facebook">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.4 0.206787H1.6C0.716344 0.206787 0 0.923132 0 1.80679V27.6068C0 28.4904 0.716344 29.2068 1.6 29.2068H15.5V17.9918H11.725V13.6018H15.5V10.3718C15.5 6.62679 17.79 4.58679 21.13 4.58679C22.2555 4.58433 23.3804 4.64108 24.5 4.75679V8.67179H22.2C20.38 8.67179 20.025 9.53179 20.025 10.8018V13.5968H24.375L23.81 17.9868H20V29.2068H27.4C28.2837 29.2068 29 28.4904 29 27.6068V1.80679C29 0.923132 28.2837 0.206787 27.4 0.206787Z" fill="white"/>
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