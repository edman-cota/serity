/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable comma-dangle */
import React from "react";
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
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import FocusLock from "react-focus-lock";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import ChooseIconModal from "./ChooseIconModal";
import database, { auth } from "../../firebase";

const CreateProject = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const emoji = useSelector((state) => state.emoji.value);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    const currentDate = new Date();
    const timestamp = currentDate.getTime(); // Milliseconds

    const projectRef = database.ref(`${user?.uid}/projects`);
    const newProjectRef = projectRef.push();
    newProjectRef
      .set({
        id: newProjectRef.key,
        name: data.name.trim(),
        emoji,
        color: "",
        activeCount: 0,
        taskCount: 0,
        shared: false,
        members: [],
        columns: [],
        columnsOrder: [],
        createdAt: timestamp.toString(),
        createdBy: user.uid,
        showCompleted: false,
      })
      .then(() => {
        // Add new project to projectOrder root
        const newRef = database.ref(`${user?.uid}/projectOrder`);
        // if null, create a new list with id, if not add newID to list
        newRef.transaction((currentArray) => {
          if (currentArray === null) {
            return { 0: newProjectRef.key };
          }
          currentArray.push(newProjectRef.key);
          return currentArray;
        });

        // 1
        const columnTodoRef = database.ref(`${user?.uid}/columns`);
        const newColTodoRef = columnTodoRef.push();
        newColTodoRef
          .set({
            id: newColTodoRef.key,
            title: "To-do",
            color: "#ee9612",
            createdBy: user?.uid,
            isTranslatable: true,
            createdAt: timestamp.toString(),
          })
          .then(() => {
            // Add new column to current project column order list
            const newColTodoOrderRef = database.ref(
              `${user?.uid}/projects/${newProjectRef.key}/columnOrder`
            );

            newColTodoOrderRef.transaction((currentArray) => {
              if (currentArray === null) {
                return { 0: newColTodoRef.key };
              }
              currentArray.push(newColTodoRef.key);
              return currentArray;
            });

            // 2
            const columnInProgressRef = database.ref(`${user?.uid}/columns`);
            const newColInProgressRef = columnInProgressRef.push();
            newColInProgressRef
              .set({
                id: newColInProgressRef.key,
                title: "In Progress",
                color: "#ee9612",
                createdBy: user?.uid,
                isTranslatable: true,
                createdAt: timestamp.toString(),
              })
              .then(() => {
                // Add new column to current project column order list
                const newColInProgressOrderRef = database.ref(
                  `${user?.uid}/projects/${newProjectRef.key}/columnOrder`
                );

                newColInProgressOrderRef.transaction((currentArray) => {
                  if (currentArray === null) {
                    return { 0: newColInProgressRef.key };
                  }
                  currentArray.push(newColInProgressRef.key);
                  return currentArray;
                });

                // 3
                const columnCompletedRef = database.ref(`${user?.uid}/columns`);
                const newColCompletedRef = columnCompletedRef.push();
                newColCompletedRef
                  .set({
                    id: newColCompletedRef.key,
                    title: "Completed",
                    color: "#ee9612",
                    createdBy: user?.uid,
                    isTranslatable: true,
                    createdAt: timestamp.toString(),
                  })
                  .then(() => {
                    // Add new column to current project column order list
                    const newColCompletedOrderRef = database.ref(
                      `${user?.uid}/projects/${newProjectRef.key}/columnOrder`
                    );

                    newColCompletedOrderRef.transaction((currentArray) => {
                      if (currentArray === null) {
                        return { 0: newColCompletedRef.key };
                      }
                      currentArray.push(newColCompletedRef.key);
                      return currentArray;
                    });
                  });
              });
          });

        onClose();
        resetField("name");
      });
  };

  return (
    <>
      <Tooltip label="Create project">
        <Button variant="ghost" onClick={onOpen}>
          +
        </Button>
      </Tooltip>

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
            mt="4px"
            mb="10px"
            fontWeight={500}
            fontSize="17px"
            color="white"
          >
            <FormattedMessage id="create_project" />
          </ModalHeader>

          <ModalBody>
            <Flex w="100%" direction="column">
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                <FocusLock>
                  <Input
                    autoComplete="off"
                    placeholder="Give your new project a name"
                    {...register("name", { required: true })}
                    _focus={{
                      borderColor: "#2175e2",
                    }}
                  />
                </FocusLock>
                <ChooseIconModal />
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
                    <FormattedMessage id="create" />
                  </Button>
                </HStack>
              </form>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateProject;
