import React from 'react';
import CitationBox from './citation-box';

const Citation = (props) => {
  const [tab, setTab] = React.useState(1)

  function handleClick(flag) {
    setTab(flag)
  }
  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', { month: 'long' });
  }
  const url = window.location.href;
  const narratorName = props.data.narratorNameD;
  const mediaName = props.data.publishMedia[0].accessName;
  const interviewerName = props.data.interviewer.name;

  const dateFull = props.data.date;
  const day = dateFull.slice(8, 10);
  const monthNumber = dateFull.slice(5, 7);
  const monthName = getMonthName(monthNumber);
  const publishedDate = day + ' ' + monthName;
  const publishedYear = dateFull.slice(0, 4);

  const accessionDateFull = props.data.publishMedia[0].accessionDate;
  const accessionDay = accessionDateFull.slice(8, 10);
  const accessionMonthNumber = accessionDateFull.slice(5, 7);
  const accessionMonthName = getMonthName(accessionMonthNumber);
  const accessionYear = accessionDateFull.slice(0, 4);
  const accessionDate = accessionDay + ' ' + accessionMonthName;

  const data = {
    pageTitle: props.data.id,
    partialTranscription: props.data.partialTranscription,
    accessionDate: accessionDate,
    accessionYear: accessionYear,
    publishedDay: day,
    publishedMonth: monthName,
    publishedYear: publishedYear,
    mediaName: mediaName,
    narratorName: narratorName,
    interviewerName: interviewerName,
    url: url
  };


  
  
  return (
    <section className="citation tab-content">
      <div className="container">
        <div className="citation__subheading"><h4 className='citation__title'>Citation Format</h4> <p>select one of the following to preview citation format </p></div>
        <div className="tabs citation-tabs">
          <div className={`citation-tab tab btn btn--small ${tab === 1 ? 'btn--yellow' : 'btn--white'}`} onClick={() => handleClick(1)}>Oxford</div>
          <div className={`citation-tab tab btn btn--small ${tab === 2 ? 'btn--yellow' : 'btn--white'}`} onClick={() => handleClick(2)}>Harvard</div>
          <div className={`citation-tab tab btn btn--small ${tab === 3 ? 'btn--yellow' : 'btn--white'}`} onClick={() => handleClick(3)}>Uniform</div>
          <div className={`citation-tab tab btn btn--small ${tab === 4 ? 'btn--yellow' : 'btn--white'}`} onClick={() => handleClick(4)}>AGCL</div>
          <div className={`citation-tab tab btn btn--small ${tab === 5 ? 'btn--yellow' : 'btn--white'}`} onClick={() => handleClick(5)}>AMA</div>
          <div className={`citation-tab tab btn btn--small ${tab === 6 ? 'btn--yellow' : 'btn--white'}`} onClick={() => handleClick(6)}>APA</div>
          <div className={`citation-tab tab btn btn--small ${tab === 7 ? 'btn--yellow' : 'btn--white'}`} onClick={() => handleClick(7)}>Other</div>
        </div>
        <CitationElement tab={tab} data={data} />
      </div>
    </section>
  )
}

export default Citation;
function CitationElement(props) {

  switch (props.tab) {
    case 7: return <CitationBox type="Other" data={props.data} />
    case 6: return <CitationBox type="APA" data={props.data} />
    case 5: return <CitationBox type="AMA" data={props.data} />
    case 4: return <CitationBox type="AGCL" data={props.data} />
    case 3: return <CitationBox type="Uniform" data={props.data} />
    case 2: return <CitationBox type="Harvard" data={props.data}  />
    case 1: return <CitationBox type="Oxford" data={props.data} />
    default: return <CitationBox type="Oxford" data={props.data} />
  }
}