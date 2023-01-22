import { Input } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { RootState } from 'src/store'
import database, { auth } from '../../firebase'
import React from 'react'

const ProjectName = () => {
  const [user] = useAuthState(auth)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)
  const [title, setTitle] = useState(workingProject.name || '')

  useEffect(() => {
    document.title = workingProject.name || ''
    setTitle(workingProject.name || '')
  }, [workingProject])

  const handleOnChange = (e: any) => {
    setTitle(e.target.value)

    if (workingProject.id !== undefined) {
      database.ref(`${user?.uid}/projects/${workingProject.id}`).update({ name: e.target.value })
    }
  }

  return (
    <Input
      value={title}
      fontSize='18px'
      p='0px'
      border='0px'
      autoFocus={title?.length === 0}
      spellCheck={false}
      maxLength={25}
      minLength={1}
      fontWeight={700}
      placeholder='Give me a title'
      onChange={(e) => handleOnChange(e)}
      _focus={{ outline: 'none' }}
    />
  )
}
export default ProjectName
