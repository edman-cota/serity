import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalBody,
  Flex,
  ModalFooter,
  Button,
  Text,
} from '@chakra-ui/react'
import { auth } from '../../firebase'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth'

const DeleteAccountModal = () => {
  const [user] = useAuthState(auth)
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
                <FormattedMessage id='deleting_your_account_is_permanent' />{' '}
                <b>
                  <FormattedMessage id='all_your_data_will_be_wiped_out' />
                </b>{' '}
                <FormattedMessage id='and_your_wont_be_able_to_get_it_back' />
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
