import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useWindowSize } from 'react-use'
import ContentEditable from 'react-contenteditable'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import styles from './styles.module.scss'
import { Task } from '../../models/task.model'
import { setTask } from '@features/counter/taskSlice'
import { setIsOpen } from '@features/counter/onToggleSlice'
import { updateTaskContent } from '@helpers/updateTaskContent'
import { setActiveIndex } from '@features/counter/activeIndexSlice'
import { setSelectedTaskId } from '@features/counter/selectedTaskIdSlice'
import { setSidebarVisibility } from '@features/counter/sidebarVisibilitySlice'
import { setTaskActivityVisibility } from '@features/counter/taskActivitySlice'

interface Props {
  task: Task
  index: number
}

const ItemTitle = ({ task, index }: Props) => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const [user] = useAuthState(auth)
  const [html, setHtml] = useState(task.content)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const onSelectItem = (id: string, itemIndex: number) => {
    dispatch(setSelectedTaskId(id))
    dispatch(setTask(task))
    dispatch(setActiveIndex(itemIndex))
    dispatch(setTaskActivityVisibility(false))
    dispatch(setIsOpen(true))

    if (width <= 1210) {
      dispatch(setSidebarVisibility(false))
    }
  }

  const handleOnChange = (e: any) => {
    setHtml(e.target.value)
    if (workingProject.id !== undefined) {
      updateTaskContent(user, task.id, workingProject.id, e.target.value)
    }
  }

  return (
    <Flex flex={3} h='100%' alignItems='center' onDoubleClick={() => onSelectItem(task.id, index)}>
      <ContentEditable
        html={html}
        className={styles.taskContentEditable}
        onChange={handleOnChange}
      />
    </Flex>
  )
}

export default ItemTitle
