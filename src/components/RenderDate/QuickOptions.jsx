import React from "react";
import { Flex, HStack } from "@chakra-ui/react";

import { useGetTask } from "../../hooks/useGetTask";
import PriorityIcon from "../RenderPriority/PriorityIcon";
import CalendarPopover from "./CalendarPopover";

const DatePicker = () => {
  const { task } = useGetTask();

  return (
    <HStack w="100%">
      <CalendarPopover />
      <Flex ml="20px">
        <PriorityIcon task={task?.at(0)} />
      </Flex>
    </HStack>
  );
};

export default DatePicker;
