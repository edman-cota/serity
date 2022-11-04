import { VStack } from '@chakra-ui/react'
import 'react-datepicker/dist/react-datepicker.css'
import { useSelector } from 'react-redux'
import InputTaskTitle from '../Item/InputTaskTitle'
import QuickOptions from '../RenderDate/QuickOptions'
import Description from './Description'
import type { RootState } from '../../store'

const DetailTab = () => {
  const task = useSelector((state: RootState) => state.task.value)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  return (
    <VStack h='100%' px='20px'>
      <InputTaskTitle content={task.content} id={task.id} projectId={workingProject.id} />
      <br />
      <Description
        description={task.description}
        title={task.content}
        id={task.id}
        projectId={workingProject.id}
      />
      <br />
      <QuickOptions task={task} />
    </VStack>
  )
}

export default DetailTab
