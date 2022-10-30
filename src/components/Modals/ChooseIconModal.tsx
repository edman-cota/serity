/* eslint-disable comma-dangle */
import React from 'react'
import {
  Modal,
  Text,
  Button,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import { FormattedMessage } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import type { RootState } from '../../store'
import { setEmoji } from '../../features/counter/emojiSlice'

const ChooseIconModal = () => {
  const dispatch = useDispatch()
  const emoji = useSelector((state: RootState) => state.emoji.value)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const background = useColorModeValue('white', '#282e3e')
  const buttonBg = useColorModeValue('rgba(0, 0, 0, 0.01)', 'rgba(255, 255, 255, 0.06)')

  const onEmojiClick = (emojiData: any) => {
    dispatch(setEmoji(emojiData.emoji))
    onClose()
  }

  return (
    <>
      <Button
        onClick={onOpen}
        bg={buttonBg}
        w="100%"
        display="flex"
        justifyContent="space-between"
        mt="20px"
      >
        <FormattedMessage id="choose_an_icon" />
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {emoji}
          <BiChevronRight />
        </span>
      </Button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" size="xl">
        <ModalOverlay />
        <ModalContent maxW="400px" h="80%" bg={background}>
          <ModalBody>
            <Flex justifyContent="space-between" alignItems="center">
              <Text>Choose an icon</Text>
              <Button variant="ghost" px="0rem" borderRadius="full" onClick={onClose}>
                <AiOutlineClose />
              </Button>
            </Flex>
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              theme={Theme.AUTO}
              skinTonesDisabled
              // groupVisibility={{ flags: false }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ChooseIconModal
