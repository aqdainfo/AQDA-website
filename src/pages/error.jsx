import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <span className="error__item"></span>
      <span className="error__item"></span>
      <span className="error__item"></span>
      <span className="error__item"></span>
      <span className="error__item"></span>
      <span className="error__item"></span>
      <span className="error__item"></span>
      <span className="error__item"></span>
      <span className="error__item"></span>
      <span className="error__item">404</span>
      <div className="error__link--wrapper">
        <Link className="error__link btn btn--pink" to="/">Back to Homepage</Link>
      </div>
    </div>
  )
}

export default Error;