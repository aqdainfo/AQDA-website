import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import HighlightedText from './highlight-text';



const TranscriptAccordion = (props) => {
    const [isActive, setIsActive] = useState(false);
    const elRef = useRef();
    const highlightKey = props.highlightKey;

    useEffect(() => {
        if (props.activeItem === props.segmentTitle) {
            
            setIsActive(true);
            const scrollTop = elRef.current.getBoundingClientRect().top + window.pageYOffset - 300;
            window.scrollTo({top: scrollTop, behavior: 'smooth'});
        } else {
            setIsActive(false);
        }
    }, [props.activeItem]);

    const accordionAnimationHandler = () => {
        setIsActive((current) => !current);

    }

    return (
        <div className="transcript__item transcript__accordion" key={props.idx} ref={elRef}
            onClick={accordionAnimationHandler}>
            <div className="transcript__accordion-heading"><span  >{props.timestampText}</span> 
            <span className='transcript__title'>{props.segmentTitle}</span></div>

            {isActive &&
                <div className="transcript__inner transcript__accordion-body">
                    <div className="transcript__subheading">Partial Transcription</div>
                    <div className="transcript__text">
                       <HighlightedText key={props.idx} value={props.partialTranscription} highlight={highlightKey} />
                        </div>

                    <div className="transcript__subheading">Segment Synopsis</div>
                    <div className="transcript__text">{props.synopsis ? props.synopsis : 'N/A'}</div>

                    <div className="transcript__subheading">Keywords</div>
                    {props.keywords ?
                        <div className="transcript__keywords">
                            {props.keywords.split('; ').map((keyword, i) => (
                                <span key={i} className="transcript__keyword">{keyword}</span>
                            ))}
                        </div>
                        :
                        <div className="transcript__keywords">There is no Keyword!</div>
                    }

                    <div className="transcript__subheading">Subjects</div>
                    <div className="transcript__text">{props.subject ? props.subject : 'N/A'}</div>
                </div>
            }
        </div>

    )
}
export default TranscriptAccordion;