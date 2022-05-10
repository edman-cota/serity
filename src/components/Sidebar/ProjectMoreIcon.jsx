import React from "react";
// eslint-disable-next-line object-curly-newline
import { Text, Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  AiOutlineDelete,
  AiOutlineExport,
  AiOutlineShareAlt,
} from "react-icons/ai";
// import MembersMenuItem from "../Members/Members";
// import MenuItemIcon from "./MenuItemIcon";
// import MenuItemEdit from "../Workspace/EditProject";

const ProjectMoreIcon = () => (
  <Menu>
    <MenuButton
      className="menu-botton-more-icon"
      mr="16px"
      borderRadius={4}
      _active={{ background: "rgba(255, 255, 255, 0.24)" }}
    >
      <Text
        zIndex={1000}
        px="4px"
        py="2px"
        _hover={{ background: "rgba(255, 255, 255, 0.24)" }}
      >
        <FiMoreHorizontal />
      </Text>
    </MenuButton>
    <MenuList className="menu-list-4">
      {/* <MenuItemEdit /> */}
      {/* <MenuItemIcon /> */}
      {/* <MembersMenuItem /> */}
      <MenuItem
        icon={<AiOutlineShareAlt />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
      >
        Share
      </MenuItem>
      <MenuItem
        icon={<AiOutlineExport />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
      >
        Export
      </MenuItem>

      <MenuItem
        icon={<AiOutlineDelete />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
      >
        Delete
      </MenuItem>
    </MenuList>
  </Menu>
);

export default ProjectMoreIcon;
