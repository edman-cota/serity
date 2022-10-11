import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { PropagateLoader } from "react-spinners";
import { colors } from "../../helpers/colors";

const LoadingScreen = (): JSX.Element => {
  return (
    <Flex h="calc(100vh - 150px)" justifyContent="center" alignItems="center">
      <Flex direction="column" alignItems="center">
        <Text fontSize={18}>
          <PropagateLoader color={colors[2]} loading={true} />
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoadingScreen;