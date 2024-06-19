import { useSelector } from "react-redux";
import ShapeBtn from "./shape-btn";


const AnimSOG = () => {
  const genders = useSelector(state => state.interviews.filteredDataByType.gen)
  const ses     = useSelector(state => state.interviews.filteredDataByType.ses)
  return (
    <div className="anim__sog anim__wrapper">
      <ShapeBtn class="anim__item--queer" quantity={ses['Queer']} name="Queer" />
      <ShapeBtn class="anim__item--pansexual" quantity={ses['Pansexual ']} name="Pansexual" />
      <ShapeBtn class="anim__item--male" quantity={genders['Male']} name="Male" />
      <ShapeBtn class="anim__item--female" quantity={genders['Female']} name="Female" />
      <ShapeBtn class="anim__item--lesbian" quantity={ses['Lesbian']} name="Lesbian" />
      <ShapeBtn class="anim__item--bisexual" quantity={ses['Bisexual']} name="Bisexual" />
      <ShapeBtn class="anim__item--heterosexual" quantity={ses['Heterosexual']} name="Heterosexual" />
      <ShapeBtn class="anim__item--trans" quantity={genders['Transgender']} name="Intersex" />
      <ShapeBtn class="anim__item--gay" quantity={ses['Gay']} name="Gay" />
      <ShapeBtn class="anim__item--non-binary" quantity={genders['Non-binary']} name="Non-binary" />
    </div>
  )
}

export default AnimSOG;