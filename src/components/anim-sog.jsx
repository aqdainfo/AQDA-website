import { useSelector } from "react-redux";

const AnimSOG = () => {
  const genders = useSelector(state => state.interviews.filteredDataByType.gen)
  const ses     = useSelector(state => state.interviews.filteredDataByType.ses)
  return (
    <div className="anim__sog anim__wrapper">
      <div className="anim__item anim__item--queer">{ses['Queer'] ? ses['Queer'] : '0'} Queer</div>
      <div className="anim__item anim__item--pansexual">{ses['Pansexual '] ? ses['Pansexual '] : '0'} Pansexual</div>
      <div className="anim__item anim__item--male">{genders['Male'] ? genders['Male'] : '0'} Male</div>
      <div className="anim__item anim__item--female">{genders['Female'] ? genders['Female'] : '0'} Female</div>
      <div className="anim__item anim__item--lesbian">{ses['Lesbian'] ? ses['Lesbian'] : '0'} Lesbian</div>
      <div className="anim__item anim__item--bisexual">{ses['Bisexual'] ? ses['Bisexual'] : '0'}<br/>Bisexual</div>
      <div className="anim__item anim__item--heterosexual">{ses['Heterosexual'] ? ses['Heterosexual'] : '0'}<br/>Heterosexual</div>
      <div className="anim__item anim__item--trans">{ses['Trans'] ? ses['Trans'] : 0} Trans</div>
      <div className="anim__item anim__item--gay">{ses['Gay'] ? ses['Gay'] : '0'} Gay</div>
      <div className="anim__item anim__item--non-binary">{genders['Non-binary'] ? genders['Non-binary'] : '0'} Non-binary</div>
    </div>
  )
}

export default AnimSOG;