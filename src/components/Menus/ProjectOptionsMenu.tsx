import {
  Menu,
  MenuList,
  MenuButton,
  Button,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from '@chakra-ui/react'
import React from 'react'
import { useWindowSize } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import { RiMoreLine, RiMore2Line } from 'react-icons/ri'

import { RootState } from 'src/store'
import MenuItemEdit from '../Modals/EditProjectModal'
import MembersMenuItem from '../Modals/InviteMembersModal'
import { setCardStyle } from '@features/counter/cardStyleSlice'
import DeleteProjectItemModal from '../Modals/DeleteProjectModal'

const ProjectOptionsMenu = () => {
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
      <MenuButton as={Button} transition='all 0.2s'>
        {width >= 768 ? (
          <RiMoreLine size={20} style={{ margin: 'auto' }} />
        ) : (
          <RiMore2Line size={20} style={{ margin: 'auto' }} />
        )}
      </MenuButton>
      <MenuList>
        <MenuItemEdit
          name={workingProject.name}
          id={workingProject.id}
          emoji={workingProject.emoji}
        />
        <MembersMenuItem projectName={workingProject.name} />
        <MenuDivider />
        <MenuOptionGroup
          defaultValue={cardStyle}
          title='Card style'
          type='radio'
          onChange={(e) => handleOnSelect(e)}
        >
          <MenuItemOption value='checkbox'>Checkbox</MenuItemOption>
          <MenuItemOption value='radio'>Radio</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <DeleteProjectItemModal name={workingProject.name} id={workingProject.id} />
      </MenuList>
    </Menu>
  )
}

export default ProjectOptionsMenu
