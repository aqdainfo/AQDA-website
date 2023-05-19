import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import TranscriptGeneral from './transcript-gen';
import TranscriptIndex from './transcript-index';
import HighlightedText from './highlight-text';
import { Tween, Timeline } from 'react-gsap';
import { useIsVisible } from '../hooks/use-is-visible-hook';

import ToggleSwitch from './toggle-switch';
import LeftArrow from '../assets/images/icon-arrow-left.svg';
import RightArrow from '../assets/images/icon-arrow-right.svg';


const pgCnt = 4;

const Transcript = ({ data, fixedContentVisible, timestamp }) => {
  const transcripts = data.publishMedia[0].transcriptions;
  const [isTranscript, setIsTranscript] = useState(true);
  const [curTranscript, setCurTranscript] = useState(0);
  const totalCountDefault = transcripts.length;
  const [searchKey, setSearchKey] = useState('');
  const [highlightKey, setHighlightKey] = useState('');
  const [filteredItems, setFilteredItems] = useState(transcripts);
  const [totalCount, setTotalcount] = useState(totalCountDefault);




  const handleInput = useCallback(e => {
    let value = e.target.value.toString();
    setSearchKey(value);
  }, []);






  const searchHandler = useCallback((e) => {
    e.preventDefault();

    let searchedItems = [];
    transcripts.forEach((item, idx) => {
      if (item.partialTranscription) {
        item.partialTranscription.split('. ').forEach(sentence => {
          sentence.split(/[ ,]+/).forEach(word => {

            let wordModified = word.toString().toLowerCase();
            if (wordModified === searchKey.toLowerCase()) {

              searchedItems.push(
                {
                  ...item,
                  segmentTitle: sentence,
                }
              );
            }
          });

        });
      }

    });
    setTotalcount(searchedItems.length);
    setFilteredItems(searchedItems);
    setHighlightKey(searchKey);


  }, [searchKey, filteredItems]);


  function handleClick(flag) {
    setCurTranscript(prevState => {
      const state = prevState + flag;
      if (state >= 0 && state < Math.ceil(totalCount / pgCnt))
        return state
      return prevState
    })
  }
  function itemSelect(index) {
  }

  return (
    <section className="transcript tab-content" >
        <div className="transcript__info">
        {isTranscript && <React.Fragment>
              <div className='transcripts__timestamp'>
                Timestamp
                <span className='transcript__timestamp-var'>{timestamp}</span>
              </div>
              <div className={`transcripts__timestamp transcripts__timestamp--fixed ${fixedContentVisible ? "is--visible" : ""}`}>
              Timestamp
                <span className='transcript__timestamp-var'>{timestamp}</span>
              </div>
             
           <TranscriptGeneral transcripts={transcripts} highlightKey={highlightKey} /> 
           </React.Fragment>
        }
          {!isTranscript &&  <TranscriptIndex transcripts={transcripts} />}
        </div>

        <div className="transcript__filter">
          <div className="transcript__header">
            <span className={isTranscript ? "text-under" : null}>TRANSCRIPT</span> &nbsp;&nbsp;&nbsp;
            <ToggleSwitch Name={"aqda"} setIsTranscript={setIsTranscript} />&nbsp;&nbsp;&nbsp;
            <span className={!isTranscript ? "text-under" : null}>INDEX</span>
          </div>
          <div className="transcript__content">
            <div className="transcript__search">
              <form onSubmit={searchHandler}>
                <input
                  type="text"
                  placeholder='keyword'
                  className='transcript__searchbox'
                  onChange={handleInput}
                  value={searchKey}
                />
                <input type="submit" className="transcript__searchbtn" value="Search Word" />
              </form>

            </div>
            <div className="transcript__result">
              <div className="transcript__result__header">
                <p>Showing results <span className="stnum">{(pgCnt * curTranscript + 1) > totalCount ? totalCount : (pgCnt * curTranscript + 1)}</span>-<span className="ednum">{pgCnt * (curTranscript + 1) > totalCount ? totalCount : pgCnt * (curTranscript + 1)}</span> of <span className="tonum">{totalCount}</span></p>
                <div className="transcript__result__buttons">
                  <button className="prev__page" onClick={() => handleClick(-1)}><img src={LeftArrow} alt="left" /></button>
                  <button className="next__page" onClick={() => handleClick(1)}><img src={RightArrow} alt="right" /></button>
                </div>
              </div>
              <div className="transcript__result__content">
                {
                  filteredItems.map((item, idx) => {
                    if (idx >= pgCnt * curTranscript && idx < pgCnt * (curTranscript + 1)) {
                      return (
                        <div className="transcript__result__item" key={idx} onClick={(idx) => itemSelect(idx)}>
                          <div className="transcript__result__timestamp">{item.timestampText} </div>
                          {isTranscript ?
                            <HighlightedText key={idx} value={item.segmentTitle} highlight={highlightKey} />

                            :
                            <div className="transcript__result__segmenttitle">{item.segmentTitle}.</div>
                          }
                        </div>
                      )
                    }
                    return
                  }
                  )
                }
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Transcript;