import React from "react";
import { VStack } from "@chakra-ui/react";
import { BsCheck2Square } from "react-icons/bs";

const Header = (): JSX.Element => {
  return (
    <VStack mt="40px" mb="40px">
      <BsCheck2Square fontSize={26} color="#1E77E4" />
      <p>C o t a</p>
    </VStack>
  );
};

export default Header;
