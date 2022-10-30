/* eslint-disable object-curly-newline */
import React, { useRef, useState } from 'react'
import { useColorModeValue, Textarea, chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import ReactFocusLock from 'react-focus-lock'
import { useDispatch, useSelector } from 'react-redux'
import { BiSquareRounded } from 'react-icons/bi'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { useGetProject } from '../../hooks/useGetProject'
import { setShowAddTask } from '../../features/counter/showAddTaskSlice'
import { scale } from './item.transition'
import { createNewTask } from '../../helpers/createNewTask'
import { RootState } from '../../store'

const MotionFlex = chakra(motion.div, {
  /**
   ** Allow motion props and non-chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

const AddTask = () => {
  const [user] = useAuthState(auth)
  const { project } = useGetProject()
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const showAddTask = useSelector((state: RootState) => state.showAddTask.value)
  const [height, setHeight] = useState(40)
  const areaRef = useRef(null)

  const handleKeyDown = (event: any) => {
    const keyCode = event.which || event.keyCode

    if (keyCode === 13 && !event.shiftKey) {
      event.preventDefault()

      if (title === '') {
        dispatch(setShowAddTask(!showAddTask))
        return
      }

      dispatch(setShowAddTask(!showAddTask))
      createNewTask(user, title, project)
    }
  }

  const handleOnInput = () => {
    setHeight(areaRef.current.scrollHeight)
  }

  const background = useColorModeValue('var(--gray-100)', 'var(--gray-700)')
  return (
    <MotionFlex
      variants={scale}
      initial="exit"
      animate="enter"
      exit="exit"
      display="flex"
      bg={background}
      margin="10px auto"
      px="10px"
      w="95%"
      maxWidth="880px"
      borderRadius="base"
      mb="40px"
    >
      <MotionFlex
        display="flex"
        width="38px"
        height="40px"
        justifyContent="center"
        alignItems="center"
      >
        <BiSquareRounded color="#a0aec0" fontSize={15} />
      </MotionFlex>
      <ReactFocusLock>
        <Textarea
          spellCheck="false"
          autoComplete="off"
          name="w3review"
          rows={1}
          cols={200}
          w="full"
          border="none"
          h={`${height}px`}
          ref={areaRef}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          value={title}
          onInput={handleOnInput}
        />
      </ReactFocusLock>
    </MotionFlex>
  )
}

export default AddTask
