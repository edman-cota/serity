import {
  useDisclosure,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>
        <FiSearch />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent maxW='750px' h='70%'>
          <ModalHeader
            display='flex'
            fontWeight={500}
            fontSize='17px'
            color='white'
            py='10px'
            borderBottom='1px'
            borderColor='rgba(226,232,240,.05)'
          >
            <Flex flex={1}>
              <InputGroup>
                <InputLeftElement pointerEvents='none' children={<FiSearch color='#7E8CA0' />} />
                <Input
                  w='100%'
                  border='none'
                  boxShadow='none'
                  _focus={{
                    outline: 'none',
                    border: 'none',
                  }}
                  placeholder='Search documentation'
                />
              </InputGroup>
            </Flex>
            <Button variant='ghost' onClick={onClose}>
              <AiOutlineClose />
            </Button>
          </ModalHeader>
          <ModalBody>
            <Flex w='100%' direction='column'>
              Rearch results here
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SearchModal
