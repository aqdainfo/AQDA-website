
const Details = ({data}) => {
  const year = new Date().getFullYear();


  return (
    <section className="details tab-content">
      <div className="details-row">

     
      <div className="details__info">
        <span className="details__label">Narrator</span>
        <span className="details__name">{ data.narratorNameD ? data.narratorNameD : 'N/A' }</span>
        
        <span className="details__label">Age</span>
        <span className="details__name">{ data.narrator.birthYear ? year - parseInt(data.narrator.birthYear) : 'N/A' }</span>
        
        <span className="details__label">Gender</span>
        <span className="details__name">{ data.genders !== undefined ? data.genders : 'N/A' }</span>
        
        <span className="details__label">Sexual Orientation</span>
        <span className="details__name">{ data.sexo ? data.sexo : 'N/A' }</span>
        
        <span className="details__label">Pronouns</span>
        <span className="details__name">{ data.pronouns ? data.pronouns : 'N/A' }</span>
      
        <span className="details__label">Intersex</span>
        <span className="details__name">{ data.transgender ? 'Yes' : 'N/A' }</span>

        <span className="details__label">Country of Escape</span>
        <span className="details__name">{ data.escapeCountry ? data.escapeCountry : 'N/A' }</span>

        <span className="details__label">Migration Status</span>
        <span className="details__name">{ data.migration.name ? data.migration.name : 'N/A' }</span>

        <span className="details__label">Interview Location</span>
        <span className="details__name">{ data.intervieweeLocation ? data.intervieweeLocation : 'N/A' }</span>

        <span className="details__label">Interview Language</span>
        <span className="details__name">{ data.language.name ? data.language.name : 'N/A' }</span>

        <span className="details__label">Interview Date</span>
        <span className="details__name">{ data.date ? data.date : 'N/A' }</span>

        <span className="details__label">Length of Interview</span>
        <span className="details__name">{ data.publishMedia[0].length ? data.publishMedia[0].length : 'N/A' }</span>

        <span className="details__label">Interviewer</span>
        <span className="details__name">{ data.interviewer.name ? data.interviewer.name : 'N/A' }</span>
      </div>
      <div className="download-btn__wrapper">
               <a className="btn btn--small btn--white btn--download" href={data.docLink} download target="_blank" rel="noopener noreferrer">Download Document</a>
            </div>
      </div>

    </section>
  )
}

export default Details;