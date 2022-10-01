import React from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line object-curly-newline
import { useColorModeValue, VStack} from "@chakra-ui/react";
import Workspace from "../Workspace/Workspace";
import Footer from "./Footer";
import Header from "./Header";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen.value);
  const display = isSidebarOpen ? "flex" : "none";

  const sidebarBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <VStack
      w="300px"
      h="100vh"
      pos="fixed"
      top={0}
      left={0}
      background={sidebarBackground}
      style={{ display }}
    >
      <Header />
      <Workspace />
      <Footer />
    </VStack>
  );
};

export default Sidebar;
