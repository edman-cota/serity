/* eslint-disable react/no-children-prop */
import React from "react";
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
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="ghost" onClick={onOpen}>
        <FiSearch />
      </Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay
          backdropFilter="auto"
          bg="rgb(15, 23, 42/0.8)"
          backdropBlur="3px"
        />
        <ModalContent
          maxW="750px"
          h="500px"
          bg="#282e3e"
          boxShadow="inset 0 1px 0 0 rgb(255 255 255 / 5%)"
        >
          <ModalHeader
            display="flex"
            mt="4px"
            mb="10px"
            fontWeight={500}
            fontSize="17px"
            color="white"
          >
            <Flex flex={1}>
              <FocusLock style={{ width: "100%" }}>
                <InputGroup w="600px" maxW="600px">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FiSearch color="gray.300" />}
                  />
                  <Input
                    w="100%"
                    maxW="600px"
                    borderRadius="none"
                    border="none"
                    boxShadow="none"
                    borderBottom="1px"
                    _focus={{
                      outline: "none",
                      border: "none",
                      borderBottom: "1px",
                      borderColor: "#2175e2",
                    }}
                    placeholder="Search"
                  />
                </InputGroup>
              </FocusLock>
            </Flex>
            <Button variant="ghost" onClick={onClose}>
              <AiOutlineClose />
            </Button>
          </ModalHeader>
          <ModalBody>
            <Flex w="100%" direction="column">
              Rearch results here
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
