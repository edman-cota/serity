/* eslint-disable comma-dangle */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from "react";
import {
  Flex,
  useDisclosure,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ReactFocusLock from "react-focus-lock";
import { useDispatch, useSelector } from "react-redux";
import { BiSquareRounded } from "react-icons/bi";
import { useAuthState } from "react-firebase-hooks/auth";
import { ADD_TASK_ACTIVITY_TYPE } from "../../constants";
import database, { auth } from "../../firebase";
import { useGetProject } from "../../hooks/useGetProject";
import { setShowAddTask } from "../../features/counter/ShowAddTaskSlice";

const MotionFlex = motion(Flex);

const AddTask = () => {
  const [user] = useAuthState(auth);
  const { project } = useGetProject();
  const [title, setTitle] = useState("");
  const { onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const showAddTask = useSelector((state) => state.showAddTask.value);
  const workingProjectId = window.localStorage.getItem("working-project");

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.value[e.target.value.length - 2] === "!") {
      if (e.keyCode === 32) {
        onClose();
      }
    }
    setTitle(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 49) {
      onOpen();
    }

    if (event.target.value[event.target.value.length - 1] === "!") {
      if (event.keyCode === 32) {
        onClose();
      }
    }

    const keyCode = event.which || event.keyCode;

    if (keyCode === 13 && !event.shiftKey) {
      event.preventDefault();

      if (title !== "") {
        const cardRef = database.ref(`${user?.uid}/tasks`);
        const newCardRef = cardRef.push();
        newCardRef
          .set({
            id: newCardRef.key,
            content: title,
            completed: 0,
            priority: 0,
            projectId: workingProjectId,
            createdBy: user?.uid,
            createdAt: new Date().toISOString(),
          })
          .then(() => {
            // Close add task Textarea
            dispatch(setShowAddTask(!showAddTask));
            setTitle("");

            database
              .ref(`${user?.uid}/projects/${workingProjectId}`)
              .update({ activeCount: project?.[0].activeCount + 1 });

            database
              .ref(`${user?.uid}/projects/${workingProjectId}`)
              .update({ taskCount: project?.[0].taskCount + 1 });

            // Add new created to To-do column
            const columnRef = database.ref(
              `${user?.uid}/columns/-Mw4Wwi2BZCRdtMv-U5u/taskIds`
            );
            columnRef.transaction((currentArray) => {
              if (currentArray === null) {
                return { 0: newCardRef.key };
              }
              currentArray.push(newCardRef.key);
              return currentArray;
            });

            // Add task to activity database
            const activityRef = database.ref(`${user?.uid}/activities`);
            const newActivityRef = activityRef.push();
            newActivityRef.set({
              id: newActivityRef.key,
              content: title,
              taskId: newCardRef.key,
              username: user?.displayName,
              projectId: workingProjectId,
              createdBy: user?.uid,
              createdAt: new Date().toISOString(),
              type: ADD_TASK_ACTIVITY_TYPE,
            });
          });
      } else {
        dispatch(setShowAddTask(!showAddTask));
      }
    }
  };

  const background = useColorModeValue("var(--gray-100)", "var(--gray-700)");

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        ease: "linear",
        duration: 1,
      }}
      bg={background}
      margin="10px auto"
      px="10px"
      w="95%"
      maxWidth="1000px"
      borderRadius="base"
      alignItems="center"
      mb="40px"
    >
      <Flex>
        <BiSquareRounded color="#a0aec0" fontSize={15} />
      </Flex>
      <ReactFocusLock>
        <Textarea
          variant="ghost"
          spellCheck="false"
          autoComplete="off"
          name="w3review"
          rows="1"
          cols="200"
          w="full"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={title}
        />
      </ReactFocusLock>
    </MotionFlex>
  );
};

export default AddTask;
