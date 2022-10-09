import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

const TimelineHeader = () => {
  return (
    <Flex mb="20px">
      <Text fontSize="18px" pl="8px" fontWeight={600}>
        <FormattedMessage id="task_activities" />
      </Text>
    </Flex>
  );
};

export default TimelineHeader;
