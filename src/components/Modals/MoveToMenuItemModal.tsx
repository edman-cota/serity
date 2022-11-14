/* eslint-disable arrow-body-style */
import React from 'react'
import {
  Modal,
  MenuItem,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalBody,
  Flex,
  Select,
  ModalFooter,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { transferTask } from '@helpers/transferTask'
import { useGetProjects } from '@hooks/useGetProjects'
import { MdOutlineDriveFileMove } from 'react-icons/md'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useGetTask } from '@hooks/useGetTask'
import { setIsOpen } from '@features/counter/onToggleSlice'

const MoveToMenuItemModal = () => {
  const [user] = useAuthState(auth)
  const { task } = useGetTask()
  const toast = useToast()
  const dispatch = useDispatch()
  const { projects } = useGetProjects()
  const [newProject, setNewProject] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOnChange = (e: any) => {
    setNewProject(e.target.value)
  }

  const handleOnClick = () => {
    if (newProject === '') {
      return
    }
    const status = transferTask(user, task[0], newProject)
    if (status === 'success') {
      onClose()
      dispatch(setIsOpen(false))
      setNewProject('')
      toast({
        description: 'Task transferred successfully',
        status: 'success',
        variant: 'subtle',
      })
    }

    if (status === 'error') {
      toast({
        description: 'Failed to transfer task',
        status: 'error',
        variant: 'subtle',
      })
    }
  }

  return (
    <>
      <MenuItem icon={<MdOutlineDriveFileMove />} onClick={onOpen}>
        <FormattedMessage id='move_to' />
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent minH='300px'>
          <ModalHeader>
            <FormattedMessage id='transfer_task' />
          </ModalHeader>
          <ModalBody>
            <Flex>You are about to transfer to project:</Flex>
            <br />
            <Select placeholder='Select an existing project' onChange={handleOnChange}>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </Select>
          </ModalBody>
          <ModalFooter justifyContent='space-between'>
            <Button w='100px' onClick={() => onClose()}>
              <FormattedMessage id='cancel' />
            </Button>
            <Button
              type='submit'
              variant='submit'
              onClick={handleOnClick}
              disabled={newProject === '' ? true : false}
            >
              <FormattedMessage id='transfer' />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MoveToMenuItemModal
