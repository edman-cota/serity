/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";
import {
  useDisclosure,
  MenuItem,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { AiOutlineDelete } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../../firebase.ts";

const DeleteProjectModal = ({ name, id }) => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    database
      .ref(`${user?.uid}/projects/${id}`)
      .set(null)
      .then(() => onClose());
  };

  return (
    <>
      <MenuItem
        icon={<AiOutlineDelete />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
        _focus={{ background: "rgb(51, 59, 70)" }}
        onClick={onOpen}
      >
        <FormattedMessage id="delete" />
      </MenuItem>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay bg="#0e1525A0" />
        <ModalContent
          maxW="450px"
          minH="260px"
          bg="#1c2333"
          boxShadow="inset 0 1px 0 0 rgb(255 255 255 / 5%)"
        >
          <ModalHeader
            display="flex"
            mt="4px"
            mb="10px"
            fontWeight={500}
            fontSize="20px"
            color="white"
          >
            Delete poject
          </ModalHeader>

          <ModalBody>
            <Flex w="100%" direction="column">
              <Flex>
                <Text>
                  All tasks withing this project <b> {name}</b> will be delted.
                  Confirm to delete project.
                </Text>
              </Flex>

              <HStack mt="100px" justifyContent="space-between">
                <Button variant="ghost" w="100px" onClick={() => onClose()}>
                  <FormattedMessage id="cancel" />
                </Button>
                <Button
                  type="submit"
                  variant="ghost"
                  bg="#ff6666"
                  w="100px"
                  onClick={handleDelete}
                  _hover={{ bg: "#ff6666" }}
                >
                  <FormattedMessage id="delete" />
                </Button>
              </HStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteProjectModal;
