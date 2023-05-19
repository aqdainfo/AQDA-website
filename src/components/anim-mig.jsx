import { useSelector } from "react-redux";

const AnimMIG = () => {
  const migrations = useSelector(state => state.interviews.filteredDataByType.migrations)
  return (
    <div className="anim__mig anim__wrapper">
      <div className="anim__item anim__item--asylum">{migrations['Asylum seeker'] ? migrations['Asylum seeker'] : '0'} Asylum Seekers</div>
      <div className="anim__item anim__item--migrant">{migrations['Migrant'] ? migrations['Migrant'] : '0'}<br/>Migrant</div>
      <div className="anim__item anim__item--refugee">{migrations['Refugee'] ? migrations['Refugee'] : '0'} Refugees</div>
    </div>
  )
}

export default AnimMIG;