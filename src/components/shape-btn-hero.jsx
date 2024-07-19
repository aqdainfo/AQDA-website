
import { useEffect,  useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as InterviewACtions from '../store/actions/interviews';

const ShapeBtnHero = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch] = useState(false);

    const buttonClickHandler = () => {
        dispatch(InterviewACtions.getFilteredData(props.name));
        setSearch(true);
        console.log(props.name);
    }



    useEffect(() => {
        if (!search) return
        setSearch(false)
        navigate('/search')
    }, [search, navigate]);

    return (
        
        <button  className={`anim__item ${props.class}`}  onClick={buttonClickHandler}> 
        {props.quantity ? props.quantity : 0} &nbsp;
        {props.btnLabel}
      </button>
    )
}
export default ShapeBtnHero;