import { VStack } from '@chakra-ui/react'
import 'react-datepicker/dist/react-datepicker.css'
import { useSelector } from 'react-redux'
import InputTaskTitle from '../Item/InputTaskTitle'
import QuickOptions from '../RenderDate/QuickOptions'
import Description from './Description'
import { RootState } from 'src/store'
import Tags from './Tags'
import { useGetTask } from '@hooks/useGetTask'
import React from 'react'

const DetailTab = () => {
  const task = useSelector((state: RootState) => state.task.value)
  // const { task } = useGetTask()
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  return (
    <VStack h='100%' px='20px' justifyContent='start'>
      <InputTaskTitle content={task.content} id={task.id} projectId={workingProject.id} />
      {/* <br /> */}
      {/* <Description
        description={task.description}
        title={task.content}
        id={task.id}
        projectId={workingProject.id}
      /> */}
      {/* <br /> */}
      <Tags />
      <br />
      <QuickOptions task={task} />
    </VStack>
  )
}

export default DetailTab
