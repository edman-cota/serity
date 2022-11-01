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
import { Tooltip } from 'serity-ui'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { AiOutlinePlus } from 'react-icons/ai'
import EmojiPicker from './EmojiPicker'
import { createNewProject } from '../../helpers/createNewProject'
import { Status } from '../../enums/definitions'
import { auth } from '../../firebase'
import { RootState } from '../../store'

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
      <Tooltip label={<FormattedMessage id="create_project" />}>
        <Button onClick={onOpen}>
          <AiOutlinePlus />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent maxW="450px" minH="360px">
          <ModalHeader fontSize="17px">
            <FormattedMessage id="create_project" />
          </ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              <Input
                autoFocus
                autoComplete="off"
                spellCheck="false"
                placeholder="Give your new project a name"
                {...register('name', { required: true })}
              />
            </form>
            <EmojiPicker />
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button
              w="100px"
              onClick={() => {
                onClose()
                resetField('name')
              }}
            >
              <FormattedMessage id="cancel" />
            </Button>
            <Button type="submit" variant="submit">
              <FormattedMessage id="create" />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateProject
