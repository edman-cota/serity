import React from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Heading,
  Flex,
  Text,
  Button,
  ModalHeader,
  ModalCloseButton,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { FaRegKeyboard } from 'react-icons/fa'

const ShortcutsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Tooltip label='Shortcuts menu' command='Ctrl + ,'>
        <Button onClick={onOpen}>
          <FaRegKeyboard />
        </Button>
      </Tooltip>

      <Modal onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent maxW='750px' h='82%'>
          <ModalHeader>
            <FormattedMessage id='keyboard_shortcuts' />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>
              <FormattedMessage id='general' />
            </Heading>
            <List>
              <br />
              <ShortcutItem
                description={<FormattedMessage id='see_all_keyboard_shortcuts' />}
                commandOne='Ctrl'
                commandTwo=','
              />
              <br />
              <ShortcutItem
                description={<FormattedMessage id='toggle_sidebar' />}
                commandOne='Ctrl'
                commandTwo='B'
              />
              <br />
              <ShortcutItem
                description={<FormattedMessage id='open_search' />}
                commandOne='Ctrl'
                commandTwo='K'
              />
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

interface Props {
  description: React.ReactNode
  commandOne: string
  commandTwo: string
}

const ShortcutItem = ({ description, commandOne, commandTwo }: Props) => {
  return (
    <ListItem display='flex' justifyContent='space-between' alignItems='center'>
      <Text>{description}</Text>
      <Flex alignItems='center' gap='6px'>
        <Text
          w='60px'
          display='flex'
          py='2px'
          fontSize='sm'
          justifyContent='center'
          alignItems='center'
          borderRadius='md'
          color='gray.300'
          bg='#2D3748'
        >
          {commandOne}
        </Text>
        <Text>+</Text>
        <Text
          w='32px'
          display='flex'
          py='2px'
          justifyContent='center'
          borderRadius='md'
          color='gray.300'
          bg='#2D3748'
        >
          {commandTwo}
        </Text>
      </Flex>
    </ListItem>
  )
}

export default ShortcutsModal
