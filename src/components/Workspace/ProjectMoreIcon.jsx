import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line object-curly-newline
import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { RiMoreLine } from "react-icons/ri";
import { AiOutlineExport, AiOutlineShareAlt } from "react-icons/ai";
import { FormattedMessage } from "react-intl";
import DeleteProjectItemModal from "../Modals/DeleteProjectModal";
import MembersMenuItem from "../Modals/InviteMembersModal";
import MenuItemEdit from "../Modals/EditProject";
import "./ProjectMore.scss";

const ProjectMore = ({ name, id, emoji }) => (
  <Menu autoSelect={false}>
    <MenuButton variant="ghost" as={Button} h="1.7rem">
      <RiMoreLine size={20} />
    </MenuButton>
    <MenuList className="menu-list-4">
      <MenuItemEdit name={name} id={id} emoji={emoji} />
      <MembersMenuItem projectName={name} />
      <MenuItem
        icon={<AiOutlineShareAlt />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
        _focus={{ background: "rgb(51, 59, 70)" }}
      >
        <FormattedMessage id="share" />
      </MenuItem>
      <MenuItem
        icon={<AiOutlineExport />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
        _focus={{ background: "rgb(51, 59, 70)" }}
      >
        <FormattedMessage id="export" />
      </MenuItem>

      <DeleteProjectItemModal name={name} id={id} />
    </MenuList>
  </Menu>
);

ProjectMore.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  emoji: PropTypes.string,
};

ProjectMore.defaultProps = {
  name: "",
  id: "",
  emoji: "",
};

export default ProjectMore;
