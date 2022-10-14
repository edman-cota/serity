import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";

const LoadingScreen = (): JSX.Element => {
  return (
    <Flex h="calc(100vh - 150px)" justifyContent="center" alignItems="center">
      <Flex direction="column" alignItems="center">
        <Text fontSize={18}>
          <ClipLoader color="#36d7b7" loading={true} />
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoadingScreen;
