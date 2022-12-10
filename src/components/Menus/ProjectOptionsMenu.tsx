import {
  Menu,
  MenuList,
  MenuButton,
  Button,
  useDisclosure,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from '@chakra-ui/react'
import React from 'react'
import { useWindowSize } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import { RiMoreLine, RiMore2Line } from 'react-icons/ri'

import { RootState } from 'src/store'
import MenuItemEdit from '../Modals/EditProject'
import MembersMenuItem from '../Modals/InviteMembersModal'
import { setCardStyle } from '@features/counter/cardStyleSlice'
import DeleteProjectItemModal from '../Modals/DeleteProjectModal'

interface Props {
  name: string
  id: string
  emoji: string
}

const ProjectMore = ({ name, id, emoji }: Props) => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const { onToggle } = useDisclosure()
  const cardStyle = useSelector((state: RootState) => state.cardStyle.value)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const handleOnSelect = (e: any) => {
    dispatch(setCardStyle(e))
  }

  console.log(workingProject)

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
        <MenuItemEdit name={name} id={id} emoji={emoji} />
        <MembersMenuItem projectName={name} />
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

export default ProjectMore
