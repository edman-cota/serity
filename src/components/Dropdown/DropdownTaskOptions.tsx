/* eslint-disable comma-dangle */
import { Button, Menu, MenuList, MenuItem, MenuButton, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { CopyIcon } from '@chakra-ui/icons'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiMoreLine } from 'react-icons/ri'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useGetTask } from '../../hooks/useGetTask'
import { auth } from '../../firebase'
import { Status } from '../../types/definitions'
import { useGetProject } from '../../hooks/useGetProject'
import { duplicateTask } from '../../helpers/duplicateTask'
import { deleteSingleTask } from '../../helpers/deleteSingleTask'
import { setSelectedTaskId } from '../../features/counter/selectedTaskIdSlice'
import { setActiveIndex } from '../../features/counter/activeIndexSlice'
import CopyToClipboardMenuItem from './CopyToClipboardMenuItem'
import MoveToMenuItemModal from '../Modals/MoveToMenuItemModal'
import { setIsExpanded } from '../../features/counter/expandedSlice'
import React from 'react'
import { setIsOpen } from '@features/counter/onToggleSlice'

const DropdownTaskOptions = () => {
  const toast = useToast()
  const dispatch = useDispatch()
  const { task } = useGetTask()
  const [user] = useAuthState(auth)
  const { project } = useGetProject()

  const handleDuplicateTask = () => {
    const status = duplicateTask(task?.at(0), project?.at(0), user)

    if (status === Status.SUCCESS) {
      toast({
        description: 'Success',
        status: 'error',
        isClosable: true,
      })
    }
    if (status === Status.ERROR) {
      toast({
        description: 'Error',
        status: 'error',
        isClosable: true,
      })
    }
  }

  const handleDeleteTask = () => {
    const status = deleteSingleTask(task?.at(0), project?.at(0), user)

    if (status === Status.SUCCESS) {
      toast({
        description: 'Task deleted successfully',
        status: Status.SUCCESS,
        isClosable: true,
        variant: 'subtle',
      })
      dispatch(setSelectedTaskId(''))
      dispatch(setActiveIndex(-1))
      dispatch(setIsExpanded(false))
      dispatch(setIsOpen(false))
    }
    if (status === Status.ERROR) {
      toast({
        description: 'Failed to delete task',
        status: Status.ERROR,
        isClosable: true,
        variant: 'subtle',
      })
    }
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button}>
        <RiMoreLine size={20} style={{ margin: 'auto' }} />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<CopyIcon />} onClick={() => handleDuplicateTask()}>
          <FormattedMessage id='duplicate_task' />
        </MenuItem>
        <CopyToClipboardMenuItem />
        <MoveToMenuItemModal />
        <MenuItem icon={<AiOutlineDelete />} onClick={() => handleDeleteTask()}>
          <FormattedMessage id='delete' />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default DropdownTaskOptions
