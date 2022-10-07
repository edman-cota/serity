/* eslint-disable comma-dangle */
import React from "react";
import {
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { CopyIcon } from "@chakra-ui/icons";
import { AiOutlineDelete } from "react-icons/ai";
import { RiMoreLine } from "react-icons/ri";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { useGetTask } from "../../hooks/useGetTask";
import { auth } from "../../firebase";
import { SUCCESS, ERROR, TOAST } from "../../constants";
import { useGetProject } from "../../hooks/useGetProject";
import { duplicateTask } from "../../helpers/duplicateTask";
import { deleteTask } from "../../helpers/deleteTask";
import { setSelectedTaskId } from "../../features/counter/SelectedTaskIdSlice";
import { setActiveIndex } from "../../features/counter/ActiveIndexSlice";
import CopyToClipboardMenuItem from "./CopyToClipboardMenuItem.tsx";

const DropdownTaskOptions = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { task } = useGetTask();
  const [user] = useAuthState(auth);
  const { project } = useGetProject();

  const handleDuplicateTask = () => {
    const status = duplicateTask(task?.at(0), project?.at(0), user);

    if (status === SUCCESS) {
      toast(TOAST.status.success);
    }
    if (status === ERROR) {
      toast({
        description: TOAST.status.error.description,
        status: ERROR,
        isClosable: true,
      });
    }
  };

  const handleDeleteTask = () => {
    const status = deleteTask(task?.at(0), project?.at(0), user);
    localStorage.setItem("split-sizes", JSON.stringify([100, 0]));
    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));

    if (status === "success") {
      toast({
        description: "Task deleted successfully",
        status: SUCCESS,
        isClosable: true,
      });
    }
    if (status === "error") {
      toast({
        description: "Failed to delete task",
        status: ERROR,
        isClosable: true,
      });
    }
  };

  return (
    <Menu autoSelect={false}>
      <MenuButton variant="ghost" as={Button} h="1.7rem">
        <RiMoreLine size={20} />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<CopyIcon />} onClick={() => handleDuplicateTask()}>
          <FormattedMessage id="duplicate_task" />
        </MenuItem>
        <CopyToClipboardMenuItem />
        <MenuItem icon={<AiOutlineDelete />} onClick={() => handleDeleteTask()}>
          <FormattedMessage id="delete" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownTaskOptions;
