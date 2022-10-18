import React from "react";
import { Button, HStack, Tooltip, useColorModeValue } from "@chakra-ui/react";
import CreateProject from "../Modals/CreateProject";
import SettingsMenu from "../Menus/SettingsMenu";
import { IoNotificationsOutline } from "react-icons/io5";
import { FormattedMessage } from "react-intl";

const Footer = (): JSX.Element => {
  const borderTopColor = useColorModeValue("gray.300", "gray.500");

  return (
    <HStack
      w="90%"
      mx="auto"
      h="80px"
      justifyContent="space-between"
      borderTop="1px"
      borderColor={borderTopColor}
    >
      <CreateProject />
      <Tooltip label={<FormattedMessage id="notifications" />}>
        <Button>
          <IoNotificationsOutline />
        </Button>
      </Tooltip>
      <SettingsMenu />
    </HStack>
  );
};

export default Footer;
