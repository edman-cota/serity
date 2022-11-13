// eslint-disable-next-line object-curly-newline
import { Menu, MenuList, MenuItem, MenuButton, Button, useDisclosure } from '@chakra-ui/react'
import { RiMoreLine, RiMore2Line } from 'react-icons/ri'
import { AiOutlineExport, AiOutlineShareAlt } from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'
import DeleteProjectItemModal from '../Modals/DeleteProjectModal'
import MembersMenuItem from '../Modals/InviteMembersModal'
import MenuItemEdit from '../Modals/EditProject'
import { useWindowSize } from 'react-use'

interface Props {
  name: string
  id: string
  emoji: string
}

const ProjectMore = ({ name, id, emoji }: Props) => {
  const { width } = useWindowSize()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Menu autoSelect={false} isLazy placement='bottom'>
      <MenuButton as={Button} transition='all 0.2s' onClick={onToggle}>
        {width >= 768 ? <RiMoreLine size={20} /> : <RiMore2Line size={20} />}
      </MenuButton>
      <MenuList>
        <MenuItemEdit name={name} id={id} emoji={emoji} />
        <MembersMenuItem projectName={name} />
        <MenuItem icon={<AiOutlineShareAlt />}>
          <FormattedMessage id='share' />
        </MenuItem>
        <MenuItem icon={<AiOutlineExport />}>
          <FormattedMessage id='export' />
        </MenuItem>

        <DeleteProjectItemModal name={name} id={id} />
      </MenuList>
    </Menu>
  )
}

export default ProjectMore
