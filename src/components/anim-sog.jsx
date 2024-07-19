import { useSelector } from "react-redux";
import ShapeBtn from "./shape-btn";

import ShapeBtnHero from "./shape-btn-hero";


const AnimSOG = () => {
  const genders = useSelector(state => state.interviews.filteredDataByType.gen)
  const ses     = useSelector(state => state.interviews.filteredDataByType.ses)
  return (
    <div className="anim__sog anim__wrapper">
      <ShapeBtn class="anim__item--queer" quantity={ses['Queer']} name="Queer" btnLabel="Queer"/>
      <ShapeBtn class="anim__item--pansexual" quantity={ses['Pansexual ']} name="Pansexual" btnLabel="Pansexual" />
      <ShapeBtn class="anim__item--male" quantity={genders['Man']} name="Man" btnLabel="Man" />
      <ShapeBtn class="anim__item--female" quantity={genders['Women']} name="Women" btnLabel="Women" />
      <ShapeBtn class="anim__item--lesbian" quantity={ses['Lesbian']} name="Lesbian" btnLabel="Lesbian" />
      <ShapeBtn class="anim__item--bisexual" quantity={ses['Bisexual']} name="Bisexual" btnLabel="Bisexual" />
      <ShapeBtn class="anim__item--heterosexual" quantity={ses['Heterosexual']} name="Heterosexual" btnLabel="Heterosexual" />
      <ShapeBtn class="anim__item--trans" quantity={genders['Transgender']} name="Transgender" btnLabel="Intersex" />
      <ShapeBtn class="anim__item--gay" quantity={ses['Gay']} name="Gay" />
      <ShapeBtn class="anim__item--non-binary" quantity={genders['Non-binary']} name="Non-binary" btnLabel="Non-binary"/>
    </div>
  )
}

export default AnimSOG;