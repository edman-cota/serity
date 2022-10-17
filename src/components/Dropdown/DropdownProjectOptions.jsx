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
// import { useDispatch, useSelector } from "react-redux";
import { IoShareSocialOutline } from "react-icons/io5";
import { FormattedMessage } from "react-intl";
// import { setShowCompleted } from "../../features/counter/ShowCompletedSlice";
// import { setSelectedTaskId } from "../../features/counter/SelectedTaskIdSlice";
// import { setActiveIndex } from "../../features/counter/ActiveIndexSlice";

const DropdownProjectOptions = () => {
  // const dispatch = useDispatch();

  // const showCompleted = useSelector((state) => state.showCompleted.value);

  // const handleShowCompletedTasks = () => {
  //   dispatch(setShowCompleted(!showCompleted));
  //   dispatch(setSelectedTaskId(""));
  //   dispatch(setActiveIndex(""));
  // };

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
          <FormattedMessage id="card_style" />
        </MenuItem>
        <MenuItem>
          <Text as="span" pr="10px">
            <IoShareSocialOutline />
          </Text>
          <FormattedMessage id="share" />
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Text as="span" pr="10px">
            <AiOutlineDelete />
          </Text>
          <FormattedMessage id="duplicate_project" />
        </MenuItem>
        {/* <MenuItem onClick={() => handleShowCompletedTasks()}>
          <Text as="span" pr="10px">
            <AiOutlineCheckCircle />
          </Text>
          {showCompleted ? (
            <Text>
              <FormattedMessage id="hide_completed" />
            </Text>
          ) : (
            <Text>
              <FormattedMessage id="show_completed" />
            </Text>
          )}
        </MenuItem> */}
        <MenuDivider />
        <MenuItem>
          <Text as="span" pr="10px">
            <AiOutlineDelete />
          </Text>
          <FormattedMessage id="delete_project" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownProjectOptions;
