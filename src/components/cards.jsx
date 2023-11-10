import { Link } from "react-router-dom";

const BASE_URL = 'https://cdhr-enki.anu.edu.au';


const Card = ({ data, exClass=' expand' }) => {

  const genders = data.genders.split(',');


  return (
    <Link className={`card${ exClass ? '' : ' card--expand' }`} to={`/explore/${data.id}`}>
      <div className="card__img">
        <img src={`${BASE_URL}${data.image}`} alt={data.narratorNameD} loading="lazy" width="300" height="300"/>
      </div>

      <div className={`card__content${exClass ? exClass : ' not-expand' }`}>
        <h2 className="card__name">{ data.narratorNameD }</h2>
        <p className="card__video-name">{ data.publishMedia[0] && data.publishMedia[0].accessName }</p>
        <p className="card__video-time">{ data.publishMedia[0] && parseInt(data.publishMedia[0].length / 60) } minutes</p>
        <div className="card__tags">
          <span className="card__tag">{ data.sexo}, </span>
          <span className="card__tag">{genders.map(item => item === 'Transgender' ? 'Intersex, ' : item + ', ')} </span>
          <span className="card__tag">{ data.language.name }, </span>
          <span className="card__tag">{ data.escapeCountry }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card;