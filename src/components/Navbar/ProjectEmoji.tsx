import React from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { RootState } from 'src/store'
import { updateProjectEmoji } from '@helpers/updateProjectEmoji'

interface Props {
  user: any
}

const ProjectEmoji = ({ user }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const workingProject = useSelector((state: RootState) => state.workingProject.value)
  const buttonBg = useColorModeValue('rgba(0, 0, 0, 0.01)', 'rgba(255, 255, 255, 0.06)')

  const handleOnEmojiSelect = (emojiData: any) => {
    if (workingProject.id !== undefined) {
      updateProjectEmoji(emojiData.native, user, workingProject.id)
      onClose()
    }
  }

  return (
    <Menu placement='bottom' isOpen={isOpen} onClose={onClose}>
      <MenuButton as={Button} bg={buttonBg} w='100%' h='2.5rem' fontSize='18px' onClick={onOpen}>
        {workingProject.emoji}
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

export default ProjectEmoji
