import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Flex,
  Input,
  Tooltip,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FormattedMessage } from 'react-intl'
import FocusLock from 'react-focus-lock'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { AiOutlinePlus } from 'react-icons/ai'
import ChooseIconModal from './EmojiPicker'
import { createNewProject } from '../../helpers/createNewProject'
import { Status } from '../../enums/definitions'
import { auth } from '../../firebase'
import { RootState } from '../../store'

const CreateProject = () => {
  const [user] = useAuthState(auth)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalBg = useColorModeValue('white', '#1c2333')
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

      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" size="xl">
        <ModalOverlay bg="#0e1525A0" />
        <ModalContent
          maxW="450px"
          minH="360px"
          bg={modalBg}
          boxShadow="inset 0 1px 0 0 rgb(255 255 255 / 5%)"
        >
          <ModalHeader mt="4px" mb="10px" fontWeight={500} fontSize="17px">
            <FormattedMessage id="create_project" />
          </ModalHeader>

          <ModalBody>
            <Flex w="100%" direction="column">
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <FocusLock>
                  <Input
                    autoComplete="off"
                    placeholder="Give your new project a name"
                    {...register('name', { required: true })}
                    _focus={{
                      borderColor: '#2175e2',
                    }}
                  />
                </FocusLock>
                <ChooseIconModal />
                <HStack mt="135px" justifyContent="space-between">
                  <Button
                    variant="ghost"
                    w="100px"
                    onClick={() => {
                      onClose()
                      resetField('name')
                    }}
                  >
                    <FormattedMessage id="cancel" />
                  </Button>
                  <Button
                    type="submit"
                    color="white"
                    bg="#2e85ec"
                    w="100px"
                    _hover={{ bg: '#0071dc' }}
                  >
                    <FormattedMessage id="create" />
                  </Button>
                </HStack>
              </form>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateProject
