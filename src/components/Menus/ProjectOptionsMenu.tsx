import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line object-curly-newline
import { Menu, MenuList, MenuItem, MenuButton, Button } from '@chakra-ui/react'
import { RiMoreLine } from 'react-icons/ri'
import { AiOutlineExport, AiOutlineShareAlt } from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'
import DeleteProjectItemModal from '../Modals/DeleteProjectModal'
import MembersMenuItem from '../Modals/InviteMembersModal'
import MenuItemEdit from '../Modals/EditProject'

interface Props {
  name: string
  id: string
  emoji: string
}

const ProjectMore = ({ name, id, emoji }: Props) => (
  <Menu autoSelect={false} placement="bottom">
    <MenuButton as={Button}>
      <RiMoreLine size={20} />
    </MenuButton>
    <MenuList>
      <MenuItemEdit name={name} id={id} emoji={emoji} />
      <MembersMenuItem projectName={name} />
      <MenuItem icon={<AiOutlineShareAlt />}>
        <FormattedMessage id="share" />
      </MenuItem>
      <MenuItem icon={<AiOutlineExport />}>
        <FormattedMessage id="export" />
      </MenuItem>

      <DeleteProjectItemModal name={name} id={id} />
    </MenuList>
  </Menu>
)

export default ProjectMore
