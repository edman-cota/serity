import {
  Menu,
  MenuList,
  MenuButton,
  Button,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Text,
  MenuItem,
} from '@chakra-ui/react'
import React from 'react'
import { useWindowSize } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import { RiMoreLine, RiMore2Line } from 'react-icons/ri'
import { BsChevronDown } from 'react-icons/bs'

import { RootState } from 'src/store'
import MenuItemEdit from '../Modals/EditProjectModal'
import MembersMenuItem from '../Modals/InviteMembersModal'
import { setCardStyle } from '@features/counter/cardStyleSlice'
import DeleteProjectItemModal from '../Modals/DeleteProjectModal'

const WorkspaceMenu = () => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const cardStyle = useSelector((state: RootState) => state.cardStyle.value)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const handleOnSelect = (e: string | string[]) => {
    if (typeof e === 'string') {
      dispatch(setCardStyle(e))
    }
  }

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
