import React from 'react'
import { useSelector } from 'react-redux'
import { VStack } from '@chakra-ui/react'
import 'react-datepicker/dist/react-datepicker.css'

import Tags from './Tags'
import { RootState } from 'src/store'
import InputTaskTitle from '../Item/InputTaskTitle'
import QuickOptions from '../RenderDate/QuickOptions'

const DetailTab = () => {
  const task = useSelector((state: RootState) => state.task.value)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  return (
    <VStack h='100%' px='20px' justifyContent='start'>
      <InputTaskTitle content={task.content} id={task.id} projectId={workingProject.id} />
      <Tags />
      <br />
      <QuickOptions task={task} />
    </VStack>
  )
}

export default DetailTab
