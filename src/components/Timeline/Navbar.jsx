import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { RiFileExcel2Line } from "react-icons/ri";

const Navbar = () => (
  <Flex w="100%" mb="16px">
    <Flex flex="1" justifyContent="end">
      <Text
        color="#7A7B7E"
        p="8px"
        _hover={{ backgroundColor: "#e2e8f0" }}
        fontSize="17px"
        borderRadius="7px"
      >
        <RiFileExcel2Line />
      </Text>
    </Flex>
  </Flex>
);

export default Navbar;
