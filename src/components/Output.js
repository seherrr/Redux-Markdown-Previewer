import React from 'react'
import { marked } from 'marked'
import { input, initialInput, isClicked } from '../redux/markdownSlice'
import {useSelector} from 'react-redux'

const Output = () => {
  const inputArea = useSelector(input);
  const clicked= useSelector(isClicked)
  const initText = useSelector(initialInput)

    return (
        <div className='output-area area' >
          <span>See the result</span>
          <div className='output-text' dangerouslySetInnerHTML={{__html: marked(clicked ? inputArea : initText) }} />
        </div>
    )
}

export default Output
