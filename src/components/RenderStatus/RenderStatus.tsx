import React from 'react'
import { useSelector } from 'react-redux'
import { useToast } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import './styles.css'
import { auth } from '../../firebase'
import { RootState } from 'src/store'
import { Task } from '../../types/task.model'
import { useGetProject } from '@hooks/useGetProject'
import { markStatusToCompleted } from '@helpers/markStatusToCompleted'
import { markStatusToUncomplete } from '@helpers/markStatusToUncomplete'

const RenderStatus = ({ task }: { task: Task }) => {
  const toast = useToast()
  const [user] = useAuthState(auth)
  const { project } = useGetProject()
  const cardStyle = useSelector((state: RootState) => state.cardStyle.value)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const borderRadius = cardStyle === 'checkbox' ? '3px' : '50px'

  const toggleStatus = (task: Task) => {
    if (task.completed) {
      const result = markStatusToUncomplete(user, workingProject, project[0], task)
      if (result === 'success') {
        toast({
          description: 'Task restored successfully',
          status: 'success',
          variant: 'subtle',
        })
      }
      return
    }

    const result = markStatusToCompleted(user, workingProject, project[0], task)
    if (result === 'success') {
      toast({
        description: 'Task completed successfully',
        status: 'success',
        variant: 'subtle',
      })
    }
  }

  return (
    <div className='control'>
      <input
        readOnly
        checked={task.completed ? true : false}
        type='checkbox'
        id={task.id}
        className='hidden-xs-up'
      />
      <label
        htmlFor={task.id}
        style={{ borderRadius: borderRadius }}
        className='cbx'
        onClick={() => toggleStatus(task)}
      />
    </div>
  )
}

export default RenderStatus
