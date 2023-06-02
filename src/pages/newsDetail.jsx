import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ReactPlayer from "react-player";
import Details from "../components/details";
import Context from "../components/context";
import Transcript from "../components/transcript";
import Citation from "../components/citation";
import Related from "../components/related";



const NewsDetail = () => {
  const { id } = useParams();
  const [isData, setIsData] = useState(false);
  const [tab, setTab] = useState(1);
  const [fixedContentVisible, setFixedContentVisible] = useState(false);
  const [timestamp, setTimestamp] = useState('0:00');
  //const [videoState, setVideoState] = useState(initialVideoState);
  const ref = React.createRef();



  const interviews = useSelector(state => state.interviews.interviews);
  let data = [];
  let youUrl = false;
  if (interviews.length > 0) {
    const result = interviews.filter(item => parseInt(item.id) === parseInt(id));

    if (result.length > 0 && !isData) { setIsData(true) };

    data = result[0];


    const url = data.publishMedia[0].youtubeUrl;
    const urlArr = url.split('https://youtu.be/');

    if (urlArr.length > 1) { youUrl = urlArr.join('https://www.youtube.com/embed/'); }
  }

  function handleClick(flag) {
    setTab(flag);
  }

  const [scrollPosition, setScrollPosition] = useState(0);

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  const handleScroll = event => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    let scrollTarget = document.querySelector('.tab-content');
    let scrollTargetY = window.pageYOffset + scrollTarget.getBoundingClientRect().top;
    if (scrollTarget) {
      if (scrollPosition > scrollTargetY) {
        setFixedContentVisible(true);
      } else {
        setFixedContentVisible(false);
      }
    }

    let transcripts = document.querySelectorAll('.transcript-gen');
    transcripts.forEach(transcript => {
      let transcriptY = window.pageYOffset + transcript.getBoundingClientRect().top
      if (isInViewport(transcript)) {
        let timestamp = transcript.querySelector('.transcript__timestamp').dataset.timestamp;
        setTimestamp(timestamp);
      }
    });
  };

  useEffect(() => {


    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, data]);


  return (
    <>
      {!isData &&
        <div className="main no-data">
          <h1>Waiting Data or There is no Data!!!</h1>
          <Link to="/explore">Explore All</Link>
        </div>
      }

      {isData &&
        <div className="newsDetail main">
          <section className="video">
            <div className="embed-container">
              {!youUrl &&
                <h3>There is no Video</h3>
              }

              {youUrl &&
                <ReactPlayer
                  url={youUrl}
                  controls="true"
                  ref={ref} />
                //<iframe width="100%" title={data.publishMedia[0].accessName} height="100%" src={youUrl} frameBorder="0" allowFullScreen />
              }
            </div>

            <div className="video__info">
              <div className="video__info__left">
                <h2 className="video__name">{data.narratorNameD}</h2>
                <h3 className="video__fullname">Interview of {data.narratorNameD}</h3>
              </div>

              <div className="video__info__right">
                <div className="video__time">{parseInt(data.publishMedia[0].length / 60)} minutes</div>
                <div className="video__tags">
                  <span className="video__tag">{data.sexo}</span>
                  <span className="video__tag">{data.genders}</span>
                  <span className="video__tag">{data.language.name}</span>
                  <span className="video__tag">{data.escapeCountry}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="tabs">
            <div className={`tab btn ${tab === 1 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(1)}>Details</div>
            <div className={`tab btn ${tab === 2 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(2)}>Context</div>
            <div className={`tab btn ${tab === 3 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(3)}>Transcript</div>
            <div className={`tab btn ${tab === 4 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(4)}>Citation</div>
            <div className={`tab btn ${tab === 5 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(5)}>Related Stories</div>
          </section>
          <section className={`tabs tabs--fixed ${fixedContentVisible ? "is--visible" : ""}`}>
            <div className={`tab btn ${tab === 1 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(1)}>Details</div>
            <div className={`tab btn ${tab === 2 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(2)}>Context</div>
            <div className={`tab btn ${tab === 3 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(3)}>Transcript</div>
            <div className={`tab btn ${tab === 4 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(4)}>Citation</div>
            <div className={`tab btn ${tab === 5 ? 'btn--pink' : 'btn--white'}`} onClick={() => handleClick(5)}>Related Stories</div>
          </section>

          <Element tab={tab} data={data} id={id} interviews={interviews} fixedContentVisible={fixedContentVisible}
            timestamp={timestamp} />
        </div>
      }
    </>
  )
}

export default NewsDetail;



function Element(props) {

  switch (props.tab) {
    case 2: return <Context data={props.data} />
    case 3: return <Transcript data={props.data} fixedContentVisible={props.fixedContentVisible}
      timestamp={props.timestamp}  />
    case 4: return <Citation data={props.data} />
    case 5: return <Related data={props.data} id={props.id} interviews={props.interviews} />
    case 1: return <Details data={props.data} />
    default: return <Details data={props.data} />
  }
}