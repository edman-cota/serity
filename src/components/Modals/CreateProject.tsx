import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Input,
  ModalFooter,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import EmojiPicker from '../Menus/EmojiPicker'
import { createNewProject } from '@helpers/createNewProject'
import { Status } from '../../models/definitions'

const CreateProject = () => {
  const [user] = useAuthState(auth)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, resetField, handleSubmit } = useForm({ mode: 'onChange' })
  const emoji = useSelector((state: RootState) => state.emoji.value)

  const onSubmit = (data: any) => {
    const status = createNewProject(data.name, user, emoji)

    if (status === Status.SUCCESS) {
      onClose()
      resetField('name')
    }
  }

  return (
    <>
      <Tooltip label={<FormattedMessage id='create_project' />}>
        <Button onClick={onOpen} h='2rem' w='2rem' p='0px'>
          <AiOutlinePlus />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent maxW='450px' minH='360px'>
          <ModalHeader fontSize='17px'>
            <FormattedMessage id='create_project' />
          </ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              <Input
                autoFocus
                autoComplete='off'
                spellCheck='false'
                placeholder='Give your new project a name'
                {...register('name', { required: true })}
              />
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
              <FormattedMessage id='create' />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateProject
