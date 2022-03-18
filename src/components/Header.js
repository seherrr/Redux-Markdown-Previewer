import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { isClicked , changeIsClicked } from '../redux/markdownSlice';

const Header = () => {
const dispatch = useDispatch();
const clicked= useSelector(isClicked)

function handleClick() {
    dispatch(changeIsClicked(!clicked))
}
    return (
        <div className='show-btn'>
            <button onClick={handleClick}>Show Example</button>
        </div>
    )
}

export default Header
