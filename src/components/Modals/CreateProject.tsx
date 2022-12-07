import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Input,
  ModalFooter,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Flex,
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import EmojiPicker from '../Menus/EmojiPicker'
import { createNewProject } from '@helpers/createNewProject'
import { Status } from '../../models/definitions'
import React, { useState } from 'react'

const CreateProject = () => {
  const [user] = useAuthState(auth)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, resetField, handleSubmit } = useForm({ mode: 'onChange' })
  const emoji = useSelector((state: RootState) => state.emoji.value)
  const [characterCount, setCharacterCount] = useState(0)
  const [projectName, setProjectName] = useState('')

  const handleOnChange = (event: any) => {
    setCharacterCount(event.target.value.length)
    setProjectName(event.target.value)
  }

  const onSubmit = (data: any) => {
    const status = createNewProject(projectName, user, emoji)

    if (status === Status.SUCCESS) {
      onClose()
      resetField('name')
    }
  }

  return (
    <>
      <Tooltip label={<FormattedMessage id='create_project' />}>
        <Button onClick={onOpen} h='2rem' w='2rem' p='0px'>
          <AiOutlinePlus />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent maxW='450px' minH='360px'>
          <ModalHeader fontSize='17px'>
            <FormattedMessage id='create_project' />
          </ModalHeader>

          <ModalBody>
            <form style={{ width: '100%' }}>
              <Flex justifyContent='flex-end' h='30px'>
                {characterCount >= 30 ? (
                  <Text color='red.500' fontSize='sm' py='6px'>
                    Character limit: {characterCount}/40
                  </Text>
                ) : null}
              </Flex>
              <Input
                name='name'
                autoFocus
                maxLength={40}
                autoComplete='off'
                spellCheck='false'
                placeholder='Give your new project a name'
                value={projectName}
                onChange={handleOnChange}
              />
            </form>
            <EmojiPicker />
          </ModalBody>

          <ModalFooter justifyContent='space-between'>
            <Button
              w='100px'
              onClick={() => {
                onClose()
                resetField('name')
              }}
            >
              <FormattedMessage id='cancel' />
            </Button>
            <Button type='submit' variant='submit' onClick={onSubmit}>
              <FormattedMessage id='create' />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateProject
