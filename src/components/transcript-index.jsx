const TranscriptIndex = (props) => {

    const transcripts = props.transcripts;


    return(
        <div className='transcript__index'>
                    <button onClick={() => props.ref.current.seekTo(10)}>Seek to 00:10</button>

        {transcripts.map((item, idx) => (
          <div className="transcript__item" key={idx}>
            <div className="transcript__timestamp"><span>{item.timestampText}</span> {item.segmentTitle}</div>

            <div className="transcript__inner">
              <div className="transcript__subheading">Partial Transcription</div>
              <div className="transcript__text">{item.partialTranscription}</div>

              <div className="transcript__subheading">Segment Synopsis</div>
              <div className="transcript__text">{item.synopsis ? item.synopsis : 'N/A'}</div>

              <div className="transcript__subheading">Keywords</div>
              {item.keywords ?
                <div className="transcript__keywords">
                  {item.keywords.split('; ').map((keyword, i) => (
                    <span key={i} className="transcript__keyword">{keyword}</span>
                  ))}
                </div>
                :
                <div className="transcript__keywords">There is no Keyword!</div>
              }

              <div className="transcript__subheading">Subjects</div>
              <div className="transcript__text">{item.subject ? item.subject : 'N/A'}</div>
            </div>
          </div>
        ))}
      </div>
    )
}
export default TranscriptIndex;