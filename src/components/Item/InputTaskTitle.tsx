import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import ContentEditable from 'react-contenteditable'
import React from 'react'
import styles from './styles.module.scss'
import { updateTaskContent } from '@helpers/updateTaskContent'

interface Props {
  content: string
  id: string | undefined
  projectId: string | undefined
}

const InputTaskTitle = ({ content, id, projectId }: Props) => {
  const [user] = useAuthState(auth)
  const [html, setHtml] = useState('')

  useEffect(() => {
    setHtml(content)
  }, [id])

  const handleOnChange = (e: any) => {
    // setHtml(e.target.value)
    if (id !== undefined && projectId !== undefined) {
      updateTaskContent(user, id, projectId, e.target.value)
    }
  }

  return (
    <ContentEditable html={html} className={styles.contentEditable} onChange={handleOnChange} />
  )
}

export default InputTaskTitle
