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
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { auth } from '../../firebase'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth'

const DeleteAccountModal = () => {
  const [user] = useAuthState(auth)
  const [newId, setNewId] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const handleDeleteUser = () => {
    user
      ?.delete()
      .then(() => {
        navigate('/')
      })
      .catch(() => {})
  }

  return (
    <>
      <Button
        variant='outline'
        color='red.400 !important'
        borderColor='red.400'
        _hover={{ bg: 'transparent', color: 'red.500 !important', borderColor: 'red.500' }}
        _active={{ bg: 'transparent' }}
        onClick={onOpen}
      >
        <FormattedMessage id='delete_account' />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent minH='300px' maxW='600px'>
          <ModalHeader>
            <FormattedMessage id='delete_account' />
          </ModalHeader>
          <ModalBody>
            <Flex>
              <Text fontSize='15px'>
                Deleting your account is permanent.{' '}
                <b>All your data will be wiped out immediately</b> and you won't be able to get it
                back.
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent='space-between'>
            <Button w='100px' onClick={() => onClose()}>
              <FormattedMessage id='cancel' />
            </Button>
            <Button
              type='submit'
              variant='submit'
              bg='red.400 !important'
              onClick={handleDeleteUser}
            >
              <FormattedMessage id='delete' />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteAccountModal
