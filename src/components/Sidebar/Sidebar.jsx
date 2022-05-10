import React from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line object-curly-newline
import { useColorModeValue, VStack, Flex, Text, Image } from "@chakra-ui/react";
import SmartFolders from "../SmartFolders/SmartFolders";
import Workspace from "../Workspace/Workspace";
import Logo from "../../assets/img/logo.svg";
import Bottom from "./Bottom";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen.value);
  const display = isSidebarOpen ? "flex" : "none";

  const sidebarBackground = useColorModeValue("white", "gray.700");

  return (
    <VStack
      w="320px"
      h="100vh"
      pos="fixed"
      top={0}
      left={0}
      borderRight="1px"
      borderRightColor="#1f2733"
      background={sidebarBackground}
      style={{ display }}
    >
      <Flex
        w="100%"
        h="80px"
        gap="30px"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Logo} alt="Logo" boxSize="24px" />
        <Text>S e r i t y</Text>
      </Flex>
      <SmartFolders />
      <Workspace />
      <Bottom />
    </VStack>
  );
};

export default Sidebar;
