/* eslint-disable object-curly-newline */
import React, { useRef, useState } from 'react'
import ReactFocusLock from 'react-focus-lock'
import { BiSquareRounded } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useColorModeValue, Textarea, Collapse, Flex, Button } from '@chakra-ui/react'

import { RootState } from 'src/store'
import { auth } from '../../firebase'
import { useGetProject } from '@hooks/useGetProject'
import { createNewTask } from '@helpers/createNewTask'
import { setShowAddTask } from '@features/counter/showAddTaskSlice'
import useAutosizeTextArea from '@hooks/useAutosizeTextArea'

const AddTask = () => {
  const [user] = useAuthState(auth)
  const { project } = useGetProject()
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const cardStyle = useSelector((state: RootState) => state.cardStyle.value)
  const showAddTask = useSelector((state: RootState) => state.showAddTask.value)
  const [height, setHeight] = useState(40)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const borderRadius = cardStyle === 'checkbox' ? '3px' : '50px'

  useAutosizeTextArea(textAreaRef.current, title)

  const handleKeyDown = (event: any) => {
    const keyCode = event.which || event.keyCode

    if (keyCode === 13 && !event.shiftKey) {
      event.preventDefault()

      if (title === '') {
        dispatch(setShowAddTask(!showAddTask))
        return
      }

      dispatch(setShowAddTask(!showAddTask))
      createNewTask(user, title, project[0])
    }
  }

  const background = useColorModeValue('var(--gray-100)', 'var(--gray-700)')

  return (
    <Collapse
      in={showAddTask}
      animateOpacity
      style={{
        width: '95%',
        maxWidth: '880px',
        display: 'flex',
        borderRadius: '0.375rem',
        margin: '10px auto',
        padding: '0 6px',
        background: background,
      }}
    >
      <Flex width='38px' height='44px' justifyContent='center' alignItems='center'>
        <Button
          display='flex'
          justifyContent='center'
          minW='20px'
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
        >
          <div className='control'>
            <input readOnly type='checkbox' id='input' className='hidden-xs-up' />
            <label htmlFor='input' style={{ borderRadius: borderRadius }} className='cbx' />
          </div>
        </Button>
      </Flex>
      <ReactFocusLock>
        <Textarea
          spellCheck='false'
          autoComplete='off'
          variant='custom'
          name='w3review'
          rows={1}
          cols={200}
          marginTop='3px'
          w='full'
          fontSize='15px'
          border='none'
          ref={textAreaRef}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          value={title}
        />
      </ReactFocusLock>
    </Collapse>
  )
}

export default AddTask
