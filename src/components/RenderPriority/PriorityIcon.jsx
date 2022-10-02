/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFlag } from "react-icons/bs";
import RenderPriority from "./RenderPriority.tsx";
import { auth } from "../../firebase";
import { useGetTask } from "../../hooks/useGetTask";
import { changeTaskPriority } from "../../helpers/changeTaskPriority";
import { priorities, colors } from "./data";

const PriorityIcon = (props) => {
  const toast = useToast();
  const { task } = useGetTask();
  const [user] = useAuthState(auth);
  const workingProject = useSelector((state) => state.workingProject.value);

  const updateTaskPriority = (priority) => {
    if (priority === task?.at(0).priority) {
      return;
    }

    const result = changeTaskPriority(user, workingProject, task, priority);
    if (result !== "success") {
      toast({
        description: "Failed to update priority",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Popover placement="bottom" isLazy zIndex={1}>
      {({ onClose }) => (
        <>
          <PopoverTrigger zIndex={1}>
            <Button variant="ghost" visibility={props.visibility}>
              <RenderPriority priority={props.task?.priority} />
            </Button>
          </PopoverTrigger>

          <PopoverContent w="150px">
            <PopoverBody p="0px">
              <Flex direction="column">
                {priorities.map((priority, index, { length }) => (
                  <Button
                    variant="custom"
                    key={priority}
                    justifyContent="start"
                    color="white"
                    onClick={() => {
                      updateTaskPriority(length - (index + 1));
                      onClose();
                    }}
                    _hover={{ background: "gray.700" }}
                  >
                    <Text as="span" w="30px">
                      <BsFlag color={colors[index]} fontSize="14px" />
                    </Text>
                    <Text as="span" fontSize="14px">
                      <FormattedMessage id={priority} />
                    </Text>
                  </Button>
                ))}
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export default PriorityIcon;
