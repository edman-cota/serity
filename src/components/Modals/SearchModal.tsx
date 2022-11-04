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
            mt='4px'
            mb='10px'
            fontWeight={500}
            fontSize='17px'
            color='white'
            borderBottom='1px'
            borderColor='rgba(226,232,240,.05)'
          >
            <Flex flex={1}>
              <InputGroup w='600px' maxW='600px'>
                <InputLeftElement pointerEvents='none' children={<FiSearch color='gray.300' />} />
                <Input
                  w='100%'
                  // maxW='600px'
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
