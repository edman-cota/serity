import React, { useState, useEffect } from 'react'
import {
  useDisclosure,
  MenuItem,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  Button,
  DarkMode,
  ModalFooter,
} from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import { FormattedMessage } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import EmojiPicker from '../Menus/EmojiPicker'
import { editProject } from '@helpers/editProject'
import { setEmoji } from '@features/counter/emojiSlice'
import CharacterLimit from '@components/CharacterLimit/CharacterLimit'

interface Props {
  name: string
  id: string | undefined
  emoji: string | undefined
}

const EditProjectModal = ({ name, id, emoji }: Props) => {
  const [user] = useAuthState(auth)
  const dispatch = useDispatch()
  const [defaultName, setDefaultName] = useState('')
  const [characterCount, setCharacterCount] = useState(0)

  const savedEmoji = useSelector((state: RootState) => state.emoji.value)

  const [touched, setTouched] = useState(false)
  const [hadInteraction, setHadInteraction] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const maxLength = 40
  const warningPoint = 30

  useEffect(() => {
    setDefaultName(name)
    setCharacterCount(name?.length)
    return () => {
      setDefaultName(name)
      setCharacterCount(0)
      setTouched(false)
      setHadInteraction(false)
    }
  }, [isOpen])

  const handleOnChange = (e: React.ChangeEvent<any>) => {
    setDefaultName(e.target.value)
    setCharacterCount(e.target.value.length)
    setHadInteraction(true)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (defaultName !== undefined && id !== undefined) {
      const status = editProject(defaultName, user, emoji, id)
      if (status === 'success') {
        window.localStorage.setItem('project', defaultName)
        onClose()
        dispatch(setEmoji(''))
      }
    }
  }

  return (
    <>
      <MenuItem as={Button} icon={<FiEdit />} onClick={onOpen}>
        <FormattedMessage id='edit' />
      </MenuItem>

      <DarkMode>
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
          <ModalOverlay />
          <ModalContent maxW='450px' minH='360px'>
            <ModalHeader fontSize='17px' color='white'>
              <FormattedMessage id='edit_project' />
            </ModalHeader>

            <ModalBody>
              <form style={{ width: '100%' }} onSubmit={handleOnSubmit}>
                <CharacterLimit
                  characterCount={characterCount}
                  maxLength={maxLength}
                  warningPoint={warningPoint}
                  touched={touched}
                  hadInteraction={hadInteraction}
                />
                <Input
                  autoComplete='off'
                  autoFocus
                  maxLength={maxLength}
                  spellCheck='false'
                  name='name'
                  placeholder='Give your project a name'
                  value={defaultName}
                  onChange={handleOnChange}
                  onBlur={() => setTouched(true)}
                />
              </form>
              <EmojiPicker />
            </ModalBody>
            <ModalFooter justifyContent='space-between'>
              <Button
                w='100px'
                onClick={() => {
                  onClose()
                }}
              >
                <FormattedMessage id='cancel' />
              </Button>
              <Button type='submit' variant='submit' onClick={handleOnSubmit}>
                <FormattedMessage id='save' />
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </DarkMode>
    </>
  )
}

export default EditProjectModal
