import React from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  VStack,
  Heading,
  Flex,
  Text,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import { FaRegKeyboard } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const ShortcutsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Tooltip label="Open shortcuts menu &#183; Ctrl + ,">
        <Button variant="ghost" onClick={onOpen}>
          <FaRegKeyboard />
        </Button>
      </Tooltip>

      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" size="xl">
        <ModalOverlay bg="#0e1525A0" />
        <ModalContent
          maxW="750px"
          h="83%"
          bg="#1c2333"
          boxShadow="inset 0 1px 0 0 rgb(255 255 255 / 5%)"
        >
          <ModalBody display="flex" p="0px">
            <VStack h="100%" flex={1} p="20px">
              <Flex justifyContent="space-between" w="100%">
                <Text>Keyboard Shortcuts</Text>
                <Button variant="ghost" px="0rem" borderRadius="full" onClick={onClose}>
                  <AiOutlineClose />
                </Button>
              </Flex>
              <Flex w="100%" direction="column">
                <Heading size="lg">General</Heading>
                <br />
                <Flex justifyContent="space-between">
                  <Text>See All Keyboard Shortcuts</Text>
                  <Flex alignItems="center">
                    <Text
                      w="60px"
                      display="flex"
                      mr="6px"
                      padding="2px 10px"
                      justifyContent="center"
                      borderColor="white"
                      alignItems="center"
                      border="1px"
                      borderRadius="base"
                    >
                      Ctrl
                    </Text>
                    <Text>+</Text>
                    <Text
                      w="32px"
                      display="flex"
                      ml="6px"
                      padding="2px 10px"
                      justifyContent="center"
                      borderColor="white"
                      border="1px"
                      borderRadius="base"
                    >
                      ,
                    </Text>
                  </Flex>
                </Flex>
                <br />
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Toggle Sidebar</Text>
                  <Flex alignItems="center">
                    <Text
                      w="60px"
                      display="flex"
                      mr="6px"
                      padding="2px 10px"
                      justifyContent="center"
                      borderColor="white"
                      alignItems="center"
                      border="1px"
                      borderRadius="base"
                    >
                      Ctrl
                    </Text>
                    <Text>+</Text>
                    <Text
                      w="32px"
                      display="flex"
                      ml="6px"
                      padding="2px 10px"
                      justifyContent="center"
                      borderColor="white"
                      border="1px"
                      borderRadius="base"
                    >
                      B
                    </Text>
                  </Flex>
                </Flex>
                <br />
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Open Search</Text>
                  <Flex alignItems="center">
                    <Text
                      w="60px"
                      display="flex"
                      mr="6px"
                      padding="2px 10px"
                      justifyContent="center"
                      borderColor="white"
                      alignItems="center"
                      border="1px"
                      borderRadius="base"
                    >
                      Ctrl
                    </Text>
                    <Text>+</Text>
                    <Text
                      w="32px"
                      display="flex"
                      ml="6px"
                      padding="2px 10px"
                      justifyContent="center"
                      borderColor="white"
                      border="1px"
                      borderRadius="base"
                    >
                      K
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ShortcutsModal
