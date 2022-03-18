import {useSelector, useDispatch} from "react-redux"
import { changeInput, input, isClicked, initialInput } from '../redux/markdownSlice';

const Input = () => {
const clicked= useSelector(isClicked)
const inputArea = useSelector(input);
const dispatch = useDispatch();
const initText = useSelector(initialInput)

    return (
        <div className={"input-area area"}>
            <span className="input-span">Enter your markdown</span>
            <textarea disabled={!clicked} value={clicked ? inputArea : initText } onChange={(e)=>dispatch(changeInput(e.target.value))}></textarea>
        </div>
    )
}

export default Input
