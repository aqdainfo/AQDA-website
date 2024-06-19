import HighlightedText from "./highlight-text";

const TranscriptGeneral = (props) => {

    const highlightKey = props.highlightKey;
    const transcripts = props.transcripts;



    return(
        <div>
        {transcripts.map((item, idx) => (
            <div className='transcript-gen' key={idx}>
              <div className="transcript__timestamp is--hidden" data-timestamp={item.timestampText}>{item.timestampText}</div>
              <div className='transcript__inner'>
                <div className='transript__title'>
                  <h3>{item.segmentTitle}</h3>
                </div>
                <div className='transript__content'>
                  <HighlightedText key={idx} value={item.partialTranscription} highlight={highlightKey} />
                </div>
              </div>
            </div>
          ))
        }
        </div>
    );
}
export default TranscriptGeneral;