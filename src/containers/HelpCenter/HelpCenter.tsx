import React from "react"
import { Flex, HStack, VStack } from "@chakra-ui/react"
import Navbar from "../../components/Home/Navbar/Navbar"
import Sidebar from "./Sidebar"

const HelpCenter = () => {
  return (
    <VStack w="100%">
      <Navbar />
      <HStack w="100%" alignItems="start">
        <Sidebar />
        <Flex flex={1}>Main content</Flex>
      </HStack>
    </VStack>
  )
}

export default HelpCenter
