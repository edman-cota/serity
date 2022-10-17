/* eslint-disable no-unsafe-optional-chaining */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BsPlus } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { ADD_TASK_ACTIVITY_TYPE } from "constants";
import { useGetProject } from "../../hooks/useGetProject.ts";
import database, { auth } from "../../firebase.ts";
import { Span } from "../Column/styles";

const AddCard = ({ columnId }) => {
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState("");
  const { colorMode } = useColorMode();
  const [isDark, setIsDark] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { project } = useGetProject();
  const workingProject = useSelector((state) => state.workingProject.value);

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const addCard = () => {
    const cardRef = database.ref(`${user?.uid}/tasks`);
    const newCardRef = cardRef.push();
    newCardRef
      .set({
        id: newCardRef.key,
        content: title,
        tags: [],
        assignees: [],
        completed: 0,
        createdAt: new Date().toISOString(),
        priority: 0,
        projectId: workingProject.id,
        createdBy: user?.uid,
      })
      .then(() => {
        // UPDATE number of active task and total tasks
        database
          .ref(`${user?.uid}/projects/${workingProject.id}`)
          .update({ activeCount: project?.[0].activeCount + 1 });

        database
          .ref(`${user?.uid}/projects/${workingProject.id}`)
          .update({ taskCount: project?.[0].taskCount + 1 });

        const newRef = database.ref(`${user?.uid}/columns/${columnId}/taskIds`);

        // if null, create a new list with id, if not add newID to list
        newRef.transaction((currentArray) => {
          if (currentArray === null) {
            setTitle("");
            return { 0: newCardRef.key };
          }

          setTitle("");
          currentArray.push(newCardRef.key);
          return currentArray;
        });

        const activityRef = database.ref(`${user?.uid}/activities`);
        const newActivityRef = activityRef.push();
        newActivityRef
          .set({
            id: newActivityRef.key,
            username: user?.displayName,
            content: title,
            taskId: newCardRef.key,
            projectId: workingProject.id,
            createdBy: user?.uid,
            createdAt: new Date().toISOString(),
            type: ADD_TASK_ACTIVITY_TYPE,
          })
          .then(() => {
            onClose();
          });
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (title !== "") {
        addCard();
      } else {
        onClose();
      }
    }
  };

  useEffect(() => {
    setIsDark(colorMode === "dark");
  }, [isDark, colorMode]);

  return (
    <>
      <Span onClick={onOpen} isDark={isDark}>
        <BsPlus data-tip="Create card" />
      </Span>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent maxW="500px" h="40%">
          <ModalHeader justifyContent="center" display="flex">
            Create a new card
          </ModalHeader>

          <ModalBody>
            <Flex w="100%">
              <textarea
                className="ta-new-task"
                spellCheck="false"
                autoComplete="false"
                name="w3review"
                rows="2"
                cols="50"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={title}
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addCard}>
              Add
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

AddCard.propTypes = {
  columnId: PropTypes.number,
};

AddCard.defaultProps = {
  columnId: 0,
};

export default AddCard;
