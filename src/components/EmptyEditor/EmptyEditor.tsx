import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { PropagateLoader } from "react-spinners";
import colors from "../../helpers/colors";

const EmptyEditor = (): JSX.Element => {
  return (
    <Flex h="calc(100vh - 150px)" justifyContent="center" alignItems="center">
      <Flex direction="column" alignItems="center">
        <Text fontSize={18}>
          <PropagateLoader color={colors["green-700"]} loading={true} />
        </Text>
      </Flex>
    </Flex>
  );
};

export default EmptyEditor;
