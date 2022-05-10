import React from "react";
import { DarkMode, Flex } from "@chakra-ui/react";

import Main from "./Main";

const Overview = (): JSX.Element => {
  return (
    <DarkMode>
      <Flex h="100%" flex={1} bg="gray.800">
        <Main />
      </Flex>
    </DarkMode>
  );
};

export default Overview;
