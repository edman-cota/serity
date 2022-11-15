import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Tooltip, useToast, Text } from '@chakra-ui/react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import { Task } from '../../types/task.model'
import { useGetProject } from '@hooks/useGetProject'
import { getPriorityColor } from '@helpers/getPriorityColor'
import { setActiveIndex } from '@features/counter/activeIndexSlice'
import { markStatusToCompleted } from '@helpers/markStatusToCompleted'
import { markStatusToUncomplete } from '@helpers/markStatusToUncomplete'
import { setSelectedTaskId } from '@features/counter/selectedTaskIdSlice'
import { setIsOpen } from '@features/counter/onToggleSlice'

interface Props {
  task: Task
}

const RenderStatus = ({ task }: Props) => {
  const toast = useToast()
  const dispatch = useDispatch()
  const [user] = useAuthState(auth)
  const { project } = useGetProject()
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const [clicked, setClicked] = React.useState(false)
  const x = useMotionValue(100)
  const x0 = useMotionValue(0)
  const tickPath = useTransform(clicked ? x : x0, [10, 100], [0, 1])
  const tickPathDone = useTransform(x, [10, 100], [0, 1])

  const markStatusAsComplete = (taskToUpdate: Task) => {
    setTimeout(() => {
      const result = markStatusToCompleted(user, workingProject, project[0], taskToUpdate)

      if (result === 'success') {
        // close task detail sidebar
        dispatch(setSelectedTaskId(''))
        dispatch(setIsOpen(false))
        dispatch(setActiveIndex(-1))

        toast({
          description: 'Task completed successfully',
          status: 'success',
          variant: 'subtle',
        })
      }
    }, 300)
  }

  const markStatusAsUncomplete = (taskToUpdate: Task) => {
    const result = markStatusToUncomplete(user, workingProject, project[0], taskToUpdate)

    if (result === 'success') {
      toast({
        description: 'Task restored successfully',
        status: 'success',
        variant: 'subtle',
      })
    }
  }

  switch (task.completed) {
    case 0:
      return (
        <Tooltip label='Complete' openDelay={700}>
          <Text as='span' w='20px' height='20px'>
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 50 50'
              onClick={() => {
                setClicked(true)
                markStatusAsComplete(task)
              }}
            >
              <motion.path
                fill={clicked ? '#2175e2' : 'none'}
                strokeWidth='2'
                stroke={clicked ? '#2175e2' : getPriorityColor(task.priority || 0)}
                d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                style={{ translateX: 5, translateY: 5 }}
              />
              <motion.path
                fill='none'
                strokeWidth='2'
                stroke='white'
                d='M14,26 L 22,33 L 35,16'
                strokeDasharray='0 1'
                transition={{ type: 'tween', duration: 5 }}
                style={{ pathLength: tickPath }}
              />
            </svg>
          </Text>
        </Tooltip>
      )
    case 1:
      return (
        <Tooltip label='Completed'>
          <Text as='span' w='20px' height='20px'>
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 50 50'
              onClick={() => markStatusAsUncomplete(task)}
            >
              <motion.path
                fill='#2175e2'
                strokeWidth='2'
                stroke='#2175e2'
                d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                style={{ translateX: 5, translateY: 5 }}
              />
              <motion.path
                fill='none'
                strokeWidth='2'
                stroke='white'
                d='M14,26 L 22,33 L 35,16'
                strokeDasharray='0 1'
                style={{ pathLength: tickPathDone }}
              />
            </svg>
          </Text>
        </Tooltip>
      )
    default:
      return (
        <Tooltip label='Completed'>
          <Text as='span' w='20px' height='20px'>
            <svg width='100%' height='100%' viewBox='0 0 50 50'>
              <motion.path
                fill='#2175e2'
                strokeWidth='2'
                stroke='#2175e2'
                d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                style={{ translateX: 5, translateY: 5 }}
              />
              <motion.path
                fill='none'
                strokeWidth='2'
                stroke='white'
                d='M14,26 L 22,33 L 35,16'
                strokeDasharray='0 1'
                style={{ pathLength: tickPathDone }}
              />
            </svg>
          </Text>
        </Tooltip>
      )
  }
}

export default RenderStatus
