import React from "react";
import { Button, HStack, Tooltip } from "@chakra-ui/react"
import CreateProject from "../Modals/CreateProject.jsx"
import {IoSettingsOutline, IoNotificationsOutline} from "react-icons/io5"

const Footer = (): JSX.Element => {
    return (
        <HStack w="90%" mx="auto" h="80px" justifyContent="space-between" borderTop="1px" borderColor="gray.500">
            <CreateProject/>
            <Tooltip label="Notifications">
              <Button  variant="ghost">
                  <IoNotificationsOutline/>
              </Button>
            </Tooltip>
            <Tooltip label="Settings">
              <Button variant="ghost">
                  <IoSettingsOutline/>
              </Button>
            </Tooltip>
        </HStack>
    )
}

export default Footer;