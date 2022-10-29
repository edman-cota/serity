import React from "react"
import { Flex, VStack } from "@chakra-ui/react"
import SidebarItem from "./SidebarItem"
import ShortcutsModal from "../Modals/ShortcutsModal"

const Sidebar = (): JSX.Element => {
  return (
    <Flex w="300px">
      <VStack w="100%">
        <SidebarItem to="profile" textId="profile" />
        <SidebarItem to="notifications" textId="notifications" />
        <SidebarItem to="subscription" textId="subscriptions" />
        <ShortcutsModal />
      </VStack>
    </Flex>
  )
}

export default Sidebar
