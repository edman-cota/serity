/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React from "react"
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"

import { RiMoreLine } from "react-icons/ri"
import { AiOutlineDelete } from "react-icons/ai"

import { MdContentCopy } from "react-icons/md"
import EditColumnItem from "./EditColumnItem"

const HeaderMore = ({ name, id, color }) => (
  <Menu>
    <MenuButton
      maxHeight="20px"
      maxWidth="24px"
      borderRadius="4px !important"
      px="4px !important"
      _active={{ background: "rgba(255, 255, 255, 0.24)" }}
    >
      <RiMoreLine data-tip="Options" />
    </MenuButton>

    <MenuList className="menu-list-4">
      <EditColumnItem name={name} id={id} color={color} />
      <MenuItem
        _hover={{ background: "rgb(51, 59, 70)" }}
        h="36px"
        icon={<MdContentCopy />}
      >
        Copy as text
      </MenuItem>
      <MenuItem
        _hover={{ background: "rgb(51, 59, 70)" }}
        h="36px"
        icon={<AiOutlineDelete />}
      >
        Delete
      </MenuItem>
    </MenuList>
  </Menu>
)

export default HeaderMore
