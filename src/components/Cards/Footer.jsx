/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from "react";
import { Flex, Text, AvatarGroup, Avatar } from "@chakra-ui/react";

import RenderDateText from "../RenderDate/RenderDateText.tsx";
import PriorityIcon from "../RenderPriority/PriorityIcon";

const CardFooter = ({ task }) => (
  <Flex h="36px" alignItems="center" justifyContent="space-between" pb="6px">
    <Flex h="36px">
      <Text>
        {task.priority !== 0 ? (
          <PriorityIcon
            taskId={task.id}
            priority={task.priority}
            title={task.content}
          />
        ) : null}
      </Text>
      {task.assignees && (
        <AvatarGroup size="xs" max={5} spacing={0}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      )}
    </Flex>
    {task.due && <RenderDateText due={task.due} />}
  </Flex>
);

export default CardFooter;
