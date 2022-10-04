import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ClimbingBoxLoader } from "react-spinners";

const EmptyEditor = (): JSX.Element => {
  return (
    <Flex h="calc(100vh - 150px)" justifyContent="center" alignItems="center">
      <Flex direction="column" alignItems="center">
        <Text fontSize={18}>
          <ClimbingBoxLoader color={"#36d7b7"} loading={true} />
        </Text>
      </Flex>
    </Flex>
  );
};

export default EmptyEditor;
