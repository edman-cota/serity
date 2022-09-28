import React from "react";
import { Flex } from "@chakra-ui/react";
import PriorityIcon from "../RenderPriority/PriorityIcon";
import RenderDateText from "../RenderDate/RenderDateText";
import TagIcon from "../Icons/TagIcon";
import CalendarIcon from "../Icons/CalendarIcon";

const ItemMenu = ({ task }: { task: any }) => {
  return (
    <Flex visibility="hidden" flex={1} _groupHover={{ visibility: "visible" }}>
      <Flex flex={1} justifyContent="center">
        <TagIcon />
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent="center">
        {task?.due !== undefined ? (
          <RenderDateText due={task.due} />
        ) : null // <CalendarIcon due={task.due} />
        }
      </Flex>
      <Flex flex={1} justifyContent="center">
        {task.priority === 0 ? (
          <PriorityIcon task={task} />
        ) : (
          <PriorityIcon task={task} visibility="visible" />
        )}
      </Flex>
    </Flex>
  );
};

export default ItemMenu;
