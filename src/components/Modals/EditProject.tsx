/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import {
  useDisclosure,
  MenuItem,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Input,
  Button,
  HStack,
  DarkMode,
} from '@chakra-ui/react'
import FocusLock from 'react-focus-lock'
import { FormattedMessage } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { FiEdit } from 'react-icons/fi'
import { useAuthState } from 'react-firebase-hooks/auth'
import ChooseIconModal from './ChooseIconModal'
import { auth } from '../../firebase'
import type { RootState } from '../../store'
import { setEmoji } from '../../features/counter/emojiSlice'
import { editProject } from '../../helpers/editProject'

interface Props {
  name: string
  id: string
  emoji: string
}

const EditProject = ({ name, id, emoji }: Props) => {
  const [user] = useAuthState(auth)
  const dispatch = useDispatch()
  const savedEmoji = useSelector((state: RootState) => state.emoji.value)
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState(name)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, resetField, handleSubmit } = useForm({
    defaultValues: {
      name: title,
    },
  })

  const onSubmit = (data: any) => {
    const status = editProject(data.name, user, emoji, id)
    if (status === 'success') {
      onClose()
      dispatch(setEmoji(''))
    }
  }

  return (
    <>
      <MenuItem icon={<FiEdit />} onClick={onOpen}>
        <FormattedMessage id="edit" />
      </MenuItem>

      <DarkMode>
        <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" size="xl">
          <ModalOverlay bg="#0e1525A0" />
          <ModalContent
            maxW="450px"
            minH="360px"
            bg="#1c2333"
            boxShadow="inset 0 1px 0 0 rgb(255 255 255 / 5%)"
          >
            <ModalHeader
              display="flex"
              mt="4px"
              mb="10px"
              fontWeight={500}
              fontSize="17px"
              color="white"
            >
              <FormattedMessage id="edit_project" />
            </ModalHeader>

            <ModalBody>
              <Flex w="100%" direction="column">
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                  <FocusLock>
                    <Input
                      autoComplete="off"
                      _focus={{
                        borderColor: '#2175e2',
                      }}
                      {...register('name', { required: true })}
                    />
                  </FocusLock>
                </form>
                <ChooseIconModal />
                <HStack mt="135px" justifyContent="space-between">
                  <Button
                    variant="ghost"
                    w="100px"
                    onClick={() => {
                      onClose()
                      resetField('name')
                    }}
                  >
                    <FormattedMessage id="cancel" />
                  </Button>
                  <Button
                    type="submit"
                    color="white"
                    variant="solid"
                    bg="#2e85ec"
                    w="100px"
                    _hover={{ bg: '#2e85ec' }}
                    // disabled={!isDirty || !isValid}
                  >
                    <FormattedMessage id="save" />
                  </Button>
                </HStack>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </DarkMode>
    </>
  )
}

export default EditProject
