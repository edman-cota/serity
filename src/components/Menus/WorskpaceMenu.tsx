import { Menu, MenuList, MenuButton, Button, MenuDivider, Text, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const WorkspaceMenu = () => {
  return (
    <Menu autoSelect={false} placement='bottom'>
      <MenuButton as={Button} display='flex' w='10rem'>
        <Text as='span' display='flex' alignItems='center'>
          <Text
            h='30px'
            w='30px'
            borderRadius='50%'
            color='white'
            bg='#F05472'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            S
          </Text>
          <Text px='5px'>Serity</Text>
          <BsChevronDown />
        </Text>
      </MenuButton>
      <MenuList>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Members</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <MenuDivider />
        <MenuItem>Settings</MenuItem>
        <MenuItem>Delete workspace</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default WorkspaceMenu
