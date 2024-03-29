import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { FormattedMessage } from 'react-intl'
import { BiChevronRight } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'src/store'
import { setEmoji } from '@features/counter/emojiSlice'
import React from 'react'

const EmojiPicker = () => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const emoji = useSelector((state: RootState) => state.emoji.value)
  const buttonBg = useColorModeValue('rgba(0, 0, 0, 0.01)', 'rgba(255, 255, 255, 0.06)')

  const handleOnEmojiSelect = (emojiData: any) => {
    dispatch(setEmoji(emojiData.native))
    onClose()
  }

  return (
    <Menu placement='bottom' isOpen={isOpen} onClose={onClose}>
      <MenuButton as={Button} bg={buttonBg} w='100%' h='2.5rem' mt='20px' onClick={onOpen}>
        <Text w='95%' mx='auto' display='flex' justifyContent='space-between'>
          <Text as='span'>
            <FormattedMessage id='choose_an_icon' />
          </Text>
          <Text as='span' display='flex' alignItems='center'>
            {emoji}
            <BiChevronRight />
          </Text>
        </Text>
      </MenuButton>
      <MenuList padding='0' bg='transparent' border='none' boxShadow='none'>
        <Picker
          data={data}
          theme='dark'
          onEmojiSelect={handleOnEmojiSelect}
          previewPosition='none'
          skinTonePosition='none'
        />
      </MenuList>
    </Menu>
  )
}

export default EmojiPicker
