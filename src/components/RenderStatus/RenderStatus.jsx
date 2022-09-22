/* eslint-disable comma-dangle */
import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, useToast, Text } from "@chakra-ui/react";
import { BiSquareRounded } from "react-icons/bi";
import { BsCheckSquare } from "react-icons/bs";
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

  const markStatusAsComplete = (taskToUpdate) => {
    const result = markStatus(user, workingProject, project, taskToUpdate);
    if (result === "success") {
      // close task detail sidebar
      localStorage.setItem("split-sizes", JSON.stringify([100, 0]));
      dispatch(setSelectedTaskId(""));
      dispatch(setActiveIndex(""));

      toast({
        description: "Task completed successfully",
        status: "success",
        isClosable: true,
      });
    }
  };

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
          <Text as="span">
            <BiSquareRounded
              color="#a0aec0"
              fontSize={17}
              onClick={() => markStatusAsComplete(task)}
            />
          </Text>
        </Tooltip>
      );
    case 1:
      return (
        <Tooltip label="Completed">
          <Text as="span">
            <BsCheckSquare
              color="#54b399"
              fontSize={14}
              onClick={() => markStatusAsUncomplete(task)}
            />
          </Text>
        </Tooltip>
      );
    default:
      return (
        <Tooltip label="Complete">
          <Text as="span">
            <BiSquareRounded
              color="#a0aec0"
              onClick={() => markStatusAsComplete(task)}
            />
          </Text>
        </Tooltip>
      );
  }
};

RenderStatus.propTypes = {
  task: PropTypes.shape({ completed: PropTypes.number }).isRequired,
};

export default RenderStatus;
