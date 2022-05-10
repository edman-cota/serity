import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line object-curly-newline
import { Text, Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineExport, AiOutlineShareAlt } from "react-icons/ai";
import { FormattedMessage } from "react-intl";
import DeleteProjectItemModal from "../Modals/DeleteProjectModal";
import MembersMenuItem from "../Modals/InviteMembersModal";
import MenuItemEdit from "../Modals/EditProject";
import "./ProjectMore.scss";

const ProjectMore = ({ name, id, emoji }) => (
  <Menu>
    <MenuButton
      className="menu-botton-more-icon"
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
      <MenuItemEdit name={name} id={id} emoji={emoji} />
      <MembersMenuItem projectName={name} />
      <MenuItem
        icon={<AiOutlineShareAlt />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
      >
        <FormattedMessage id="share" />
      </MenuItem>
      <MenuItem
        icon={<AiOutlineExport />}
        h="40px"
        _hover={{ background: "rgb(51, 59, 70)" }}
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
