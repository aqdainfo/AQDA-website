import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Card from '../components/cards';
import AnimMig from '../components/anim-mig';
import AnimSog from '../components/anim-sog';

import data from '../global';

const Home = () => {
  const logo = data.global.logoText;
  const logoArr = logo.split(' ');
  const {interviews, initFilter} = useSelector(state => state.interviews);
  const recentNews = interviews.slice(0, 6);
  let topNews = [];
  let count = 0;
  let pKey = false;
  let cKey = false;

  Object.keys(initFilter).forEach( key => {
    if (key === 'gen' || key === 'ses' || key === 'migrations' ) {
      Object.keys(initFilter[key]).forEach(item => {
        if ( initFilter[key][item] > count ) {
          count = initFilter[key][item];
          pKey = key;
          cKey = item
        }})
    }
  });

  if ( pKey && cKey) {
    switch(pKey) {
      case 'migrations': {
        topNews = interviews.filter( item => {
          return item.migration.name === cKey
        })
        break;
      }

      case 'genders': {
        topNews = interviews.filter( item => {
          return item.genders.indexOf(cKey) > -1
        })
        break;
      }

      case 'ses': {
        topNews = interviews.filter( item => {
          return item.sexo.indexOf(cKey) > -1
        })
        break;
      }

      default: break;
    }
  }


  const [migFlag, setMigFlag] = useState(true);

  return (
    <div className="homepage main">
      <a className='btn btn--yellow btn--exit' href='https://www.google.com/'>
        EXIT NOW
      </a>
      <section className="banner">
        <div className="banner__logo banner__logo--mobile">
          {logoArr.map((item, key) =>(
            <span className={ `banner__logo__item banner__logo__item--${ key + 1 }` } key={key}>{ item }</span>
          ))}
        </div>

        <div className="banner__right">
          <div className="banner__switch">
            <div className="banner__labels">
              <span className={`banner__label banner__label--mobile${ migFlag ? ' hide' : ''}`}>Sogiesc</span>
              <span className={`banner__label banner__label--mobile${ migFlag ? '' : ' hide'}`}>Migration</span>
              <span className={`banner__label banner__label--desktop`}>SOGIESC*</span>
            </div>

            <div className={`banner__checkbox${ migFlag ? ' checked': '' }`}>
              <input type="checkbox" name="" id="" defaultChecked onClick={ () => setMigFlag(!migFlag) } />
              <span className="banner__tooltip">{data.global.tooltip}</span>
            </div>

            <span className={`banner__label banner__label--desktop`}>MIGRATION STATUS</span>
          </div>

          { migFlag ? <AnimMig /> : <AnimSog /> }
        </div>

        <div className="banner__left">
          <div className="banner__logo banner__logo--desktop">
            {logoArr.map((item, key) =>(
              <span className={ `banner__logo__item banner__logo__item--${ key + 1 }` } key={key}> { item } </span>
            ))}
          </div>

          <h2 className="banner__heading">{ data.home.heading }</h2>
          <p className="banner__text">{ data.home.text }</p>

          <Link to="/explore" className="btn btn--white banner__cta">Explore All</Link>
        </div>
      </section>

      <section className="news news--recent">
        <h2 className="news__heading">Recent Stories</h2>
        <div className="news__items">
          {recentNews.map((item, idx) => (
            <Card data={ item } key={idx} />
          ))}
        </div>
      </section>

      <section className="news news--top">
        <h2 className="news__heading">{cKey} Stories</h2>
        <div className="news__items">
          {topNews.map((item, idx) => (
            <Card data={ item } key={idx} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home;