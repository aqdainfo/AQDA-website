import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from '../components/cards';

import data from "../global";
import aboutImage from '../assets/images/about-image.svg';

const About = () => {
  const about = data.about;
  const interviews = useSelector(state => state.interviews.interviews);
  const recentNews = interviews.slice(0, 3);

  return (
    <div className="aboutpage main">
      <section className="banner">
        <div className="banner__img">
          <img src={ aboutImage } alt="AQDA" />
        </div>

        <div className="banner__content">
          <h2 className="banner__heading">{ about.heading }</h2>
          <div className="banner__text" dangerouslySetInnerHTML={{ __html: about.text }} />
          <Link to="/explore" className="btn btn--white banner__cta">Explore All</Link>
        </div>
      </section>

      <section className="news news--recent">
        <h2 className="news__heading">Latest Stories</h2>
        <div className="news__items">
          {recentNews.map((item, idx) => (
            <Card data={ item } key={idx} />
          ))}
        </div>

        <div className="news__cta-wrapper">
          <Link to="/explore" className="btn btn--white news__cta">Load more</Link>
        </div>

      </section>
    </div>
  )
}

export default About;