import React from "react"
import { Flex, HStack } from "@chakra-ui/react"

import PriorityIcon from "../RenderPriority/PriorityIcon"
import CalendarPopover from "./CalendarPopover"

const QuickOptions = ({ task }: any) => (
  <HStack w="100%">
    <CalendarPopover task={task} />
    <Flex ml="20px">
      <PriorityIcon task={task} />
    </Flex>
  </HStack>
)

export default QuickOptions
