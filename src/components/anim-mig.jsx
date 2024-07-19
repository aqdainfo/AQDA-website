import { useSelector } from "react-redux";
import ShapeBtnHero from "./shape-btn-hero";
const AnimMIG = () => {
  const migrations = useSelector(state => state.interviews.filteredDataByType.migrations);

  return (
    <div className="anim__mig anim__wrapper">
        <ShapeBtnHero class="anim__item--asylum" quantity={migrations['Asylum seeker']} name="Asylum seeker" btnLabel="Asylum seeker" />
        <ShapeBtnHero class="anim__item--migrant" quantity={migrations['Migrant']} name="Migrant" btnLabel="Migrant" />
        <ShapeBtnHero class="anim__item--refugee" quantity={migrations['Refugee']} name="Refugee" btnLabel="Refugee" />
    </div>
  )
}

export default AnimMIG;