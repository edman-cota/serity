/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  Button,
  Text,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFlag } from "react-icons/bs";
import RenderPriority from "./RenderPriority.tsx";
import { auth } from "../../firebase.ts";
import { changeTaskPriority } from "../../helpers/changeTaskPriority.ts";
import { priorities } from "../../helpers/priorities.ts";
import { colors } from "../../helpers/colors.ts";

const PriorityIcon = (props) => {
  const toast = useToast();
  const [user] = useAuthState(auth);
  const workingProject = useSelector((state) => state.workingProject.value);

  const updateTaskPriority = (priority) => {
    if (priority === props.task?.priority) {
      return;
    }

    const result = changeTaskPriority(
      user,
      workingProject,
      props.task,
      priority
    );
    if (result !== "success") {
      toast({
        description: "Failed to update priority",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Menu autoSelect={false} placement="bottom" isLazy>
      <MenuButton as={Button}>
        <RenderPriority priority={props.task?.priority} />
      </MenuButton>

      <MenuList minW="150px">
        {priorities.map((priority, index, { length }) => (
          <MenuItem
            key={priority}
            onClick={() => {
              updateTaskPriority(length - (index + 1));
            }}
          >
            <Text w="30px">
              <BsFlag color={colors[index]} fontSize="14px" />
            </Text>
            <FormattedMessage id={priority} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PriorityIcon;
