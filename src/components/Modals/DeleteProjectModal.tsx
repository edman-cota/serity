import React from 'react'
import {
  useDisclosure,
  MenuItem,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { AiOutlineDelete } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth'

import database, { auth } from '../../firebase'
import { formatUsername } from '@helpers/formatter'

interface Props {
  name: string | undefined
  id: string | undefined
}

const DeleteProjectModal = ({ name, id }: Props) => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const username = formatUsername(user?.email)

  const handleDelete = () => {
    if (name !== undefined && id !== undefined) {
      database
        .ref(`${user?.uid}/projects/${id}`)
        .set(null)
        .then(() => {
          window.localStorage.setItem('project', 'Serity')
          navigate(`/${username}/serity`)
          onClose()
        })
    }
  }

  return (
    <>
      <MenuItem icon={<AiOutlineDelete />} onClick={onOpen}>
        <FormattedMessage id='delete' />
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent maxW='450px' minH='260px'>
          <ModalHeader>
            <FormattedMessage id='delete_project' />
          </ModalHeader>

          <ModalBody>
            <Flex w='100%' direction='column'>
              <Flex>
                <Text>
                  <FormattedMessage id='all_tasks_within_this_project' /> <b> {name}</b>{' '}
                  <FormattedMessage id='will_be_deleted' />
                </Text>
              </Flex>

              <HStack mt='100px' justifyContent='space-between'>
                <Button variant='ghost' w='100px' onClick={() => onClose()}>
                  <FormattedMessage id='cancel' />
                </Button>
                <Button variant='remove' onClick={handleDelete}>
                  <FormattedMessage id='delete' />
                </Button>
              </HStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteProjectModal
