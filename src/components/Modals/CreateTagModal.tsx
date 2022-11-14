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
  Text,
  Flex,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { Status } from '../../types/definitions'
import ColorPicker from '@components/Menus/ColorPicker'
import { createNewTag } from '@helpers/createNewTag'

const CreateTagModal = () => {
  const [user] = useAuthState(auth)
  const [color, setColor] = useState('#f44336')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, resetField, handleSubmit } = useForm({ mode: 'onChange' })

  const handleChildProps = (color: string) => {
    setColor(color)
  }

  const onSubmit = (data: any) => {
    const status = createNewTag(user, data.name, color)

    if (status === Status.SUCCESS) {
      onClose()
      resetField('name')
    }
  }

  return (
    <>
      <Tooltip label={<FormattedMessage id='create_tag' />}>
        <Button onClick={onOpen} h='2rem' w='2rem' p='0px'>
          <AiOutlinePlus />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent maxW='450px' minH='300px'>
          <ModalHeader fontSize='17px'>
            <FormattedMessage id='Add tag' />
          </ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              <Input
                autoFocus
                autoComplete='off'
                spellCheck='false'
                placeholder='Name'
                {...register('name', { required: true })}
              />
            </form>
            <Flex mt='30px'>
              <Text pr='20px'>Color</Text>
              <ColorPicker propsToParent={handleChildProps} />
            </Flex>
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

export default CreateTagModal
