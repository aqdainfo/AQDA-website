import TranscriptAccordion from "./transcript-accordion";
const TranscriptIndex = (props) => {


  const transcripts = props.transcripts;


  return (
    <div className='transcript__index'>

      {transcripts.map((item, idx) => (
        <TranscriptAccordion
          key={idx}
          timestampText={item.timestampText}
          segmentTitle={item.segmentTitle}
          partialTranscription={item.partialTranscription}
          synopsis={item.synopsis}
          keywords={item.keywords}
          subject={item.subject}
          activeItem={props.activeItem}
          highlightKey={props.highlightKey}
        />

      ))}
    </div>
  )
}
export default TranscriptIndex;