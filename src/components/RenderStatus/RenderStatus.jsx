/* eslint-disable comma-dangle */
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, useToast, Text } from "@chakra-ui/react";
// import { BiSquareRounded } from "react-icons/bi";
// import { BsFillCheckSquareFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { useGetProject } from "../../hooks/useGetProject";
import { setSelectedTaskId } from "../../features/counter/SelectedTaskIdSlice";
import { setActiveIndex } from "../../features/counter/ActiveIndexSlice";
import { auth } from "../../firebase";

import { markStatus } from "../../helpers/markStatus";
import { markStatusToUncomplete } from "../../helpers/maskStatusToUncomplete";

const RenderStatus = ({ task }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const { project } = useGetProject();
  const workingProject = useSelector((state) => state.workingProject.value);

  const [clicked, setClicked] = React.useState(false);
  const x = useMotionValue(100);
  const x0 = useMotionValue(0);

  const markStatusAsComplete = (taskToUpdate) => {
    setTimeout(() => {
      const result = markStatus(user, workingProject, project, taskToUpdate);
      if (result === "success") {
        // close task detail sidebar
        dispatch(setSelectedTaskId(""));
        dispatch(setActiveIndex(""));

        toast({
          description: "Task completed successfully",
          status: "success",
          isClosable: true,
        });
      }
    }, 300);
  };

  const tickPath = useTransform(clicked ? x : x0, [10, 100], [0, 1]);
  const tickPathDone = useTransform(x, [10, 100], [0, 1]);

  const markStatusAsUncomplete = (taskToUpdate) => {
    const result = markStatusToUncomplete(
      user,
      workingProject,
      project,
      taskToUpdate
    );

    if (result === "success") {
      toast({
        description: "Task restored successfully",
        status: "success",
        isClosable: true,
      });
    }
  };

  switch (task.completed) {
    case 0:
      return (
        <Tooltip label="Complete">
          <Text as="span" w="20px" height="20px">
            {/* <BiSquareRounded
              color="#a0aec0"
              fontSize={17}
              onClick={() => markStatusAsComplete(task)}
            /> */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 50 50"
              onClick={() => {
                setClicked(true);
                markStatusAsComplete(task);
              }}
            >
              <motion.path
                fill={clicked ? "#2175e2" : "none"}
                strokeWidth="2"
                stroke={clicked ? "#2175e2" : "#a0aec0"}
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ translateX: 5, translateY: 5 }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke="white"
                d="M14,26 L 22,33 L 35,16"
                strokeDasharray="0 1"
                transition={{ type: "tween", duration: 5 }}
                style={{ pathLength: tickPath }}
              />
            </svg>
          </Text>
        </Tooltip>
      );
    case 1:
      return (
        <Tooltip label="Completed">
          <Text as="span" w="20px" height="20px">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 50 50"
              onClick={() => markStatusAsUncomplete(task)}
            >
              <motion.path
                fill="#2175e2"
                strokeWidth="2"
                stroke="#2175e2"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ translateX: 5, translateY: 5 }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke="white"
                d="M14,26 L 22,33 L 35,16"
                strokeDasharray="0 1"
                style={{ pathLength: tickPathDone }}
              />
            </svg>
          </Text>
        </Tooltip>
      );
    default:
      return (
        <Tooltip label="Completed">
          <Text as="span" w="20px" height="20px">
            <svg width="100%" height="100%" viewBox="0 0 50 50">
              <motion.path
                fill="#2175e2"
                strokeWidth="2"
                stroke="#2175e2"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{ translateX: 5, translateY: 5 }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke="white"
                d="M14,26 L 22,33 L 35,16"
                strokeDasharray="0 1"
                style={{ pathLength: tickPathDone }}
              />
            </svg>
          </Text>
        </Tooltip>
      );
  }
};

RenderStatus.propTypes = {
  task: PropTypes.shape({ completed: PropTypes.number }).isRequired,
};

export default RenderStatus;
