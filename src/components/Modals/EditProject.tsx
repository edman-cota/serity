import { useState } from 'react'
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
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import EmojiPicker from '../Menus/EmojiPicker'
import { editProject } from '@helpers/editProject'
import { setEmoji } from '@features/counter/emojiSlice'

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

  console.log(isOpen)

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

            {/* <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <Input autoComplete='off' autoFocus {...register('name', { required: true })} />
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
              <Button type='submit' variant='submit'>
                <FormattedMessage id='save' />
              </Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </DarkMode>
    </>
  )
}

export default EditProject
