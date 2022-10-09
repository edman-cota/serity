/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
  MenuDivider,
} from "@chakra-ui/react";
import { RiMoreLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

const DropdownProjectOptions = () => {
  return (
    <Menu>
      <MenuButton variant="ghost" as={Button} h="1.7rem">
        <RiMoreLine size={20} />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Text as="span" pr="10px">
            <AiOutlineDelete />
          </Text>
          Card style
        </MenuItem>
        <MenuItem>
          <Text as="span" pr="10px">
            <AiOutlineDelete />
          </Text>
          Share
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Text as="span" pr="10px">
            <AiOutlineDelete />
          </Text>
          Duplicate project
        </MenuItem>
        <MenuItem>
          <Text as="span" pr="10px">
            <AiOutlineDelete />
          </Text>
          Show completed
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Text as="span" pr="10px">
            <AiOutlineDelete />
          </Text>
          Delete project
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownProjectOptions;
