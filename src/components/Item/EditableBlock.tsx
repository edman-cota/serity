import React, { useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'

const EditableBlock = (props) => {
  const contentEditable = useRef()
  const [html, setHtml] = useState('<b>Hello <i>World</i></b>')
  const [htmlBackup, setHtmlBackup] = useState('')
  const [previousKey, setPreviousKey] = useState('')

  const onChangeHandler = (e) => {
    setHtml(e.target.value)
  }

  const onKeyDownHandler = (e: any) => {
    if (e.key === '/') {
      setHtmlBackup(html)
    }
    if (e.key === 'Enter') {
      if (previousKey !== 'Shift') {
        e.preventDefault()
        props.addBlock()
      }
    }
    if (e.key === 'Backspace' && !html) {
      e.preventDefault()
      props.deleteBlock()
    }
    setPreviousKey(e.key)
  }

  return (
    <ContentEditable
      className='Block'
      innerRef={contentEditable}
      html={html}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  )
}

export default EditableBlock
