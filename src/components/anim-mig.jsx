import { useSelector } from "react-redux";
import ShapeBtn from "./shape-btn";
const AnimMIG = () => {
  const migrations = useSelector(state => state.interviews.filteredDataByType.migrations);

  return (
    <div className="anim__mig anim__wrapper">
        <ShapeBtn class="anim__item--asylum" quantity={migrations['Asylum seeker']} name="Asylum seeker" />
        <ShapeBtn class="anim__item--migrant" quantity={migrations['Migrant']} name="Migrant" />
        <ShapeBtn class="anim__item--refugee" quantity={migrations['Refugee']} name="Refugee" />
    </div>
  )
}

export default AnimMIG;