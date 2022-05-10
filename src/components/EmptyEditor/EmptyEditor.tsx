import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const EmptyEditor = (): JSX.Element => {
  return (
    <Flex h="calc(100vh - 150px)" justifyContent="center" alignItems="center">
      <Flex direction="column" alignItems="center">
        <Text fontSize={18}>
          <strong>Create a task</strong>
        </Text>
        <Text mt="30px">
          <kbd>CTRL</kbd> + <kbd>N</kbd>
        </Text>
      </Flex>
    </Flex>
  );
};

export default EmptyEditor;
