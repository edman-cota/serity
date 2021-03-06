/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import {
  useDisclosure,
  MenuItem,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock";
import { FormattedMessage } from "react-intl";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import ChooseIconModal from "./ChooseIconModal";
import database, { auth } from "../../firebase";

const EditProject = ({ name, id, emoji }) => {
  const [user] = useAuthState(auth);
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState(name);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      name: title,
    },
  });

  const onSubmit = (data) => {
    database
      .ref(`${user?.uid}/projects/${id}`)
      .update({ name: data.name })
      .then(() => onClose());
  };

  return (
    <>
      <MenuItem
        icon={<FiEdit />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
        onClick={onOpen}
      >
        <FormattedMessage id="edit" />
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
          minH="360px"
          bg="#1c2333"
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
            <FormattedMessage id="edit_project" />
          </ModalHeader>

          <ModalBody>
            <Flex w="100%" direction="column">
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                <FocusLock>
                  <Input
                    autoComplete="off"
                    _focus={{
                      borderColor: "#2175e2",
                    }}
                    {...register("name", { required: true })}
                  />
                </FocusLock>
              </form>
              <ChooseIconModal emoji={emoji} />
              <HStack mt="135px" justifyContent="space-between">
                <Button
                  variant="ghost"
                  w="100px"
                  onClick={() => {
                    onClose();
                    resetField("name");
                  }}
                >
                  <FormattedMessage id="cancel" />
                </Button>
                <Button
                  type="submit"
                  variant="ghost"
                  bg="#2e85ec"
                  w="100px"
                  _hover={{ bg: "#2e85ec" }}
                  disabled={!isDirty || !isValid}
                >
                  <FormattedMessage id="save" />
                </Button>
              </HStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProject;
