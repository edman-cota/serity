/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React from "react";
import { Flex, List, ListItem, Button, Tooltip } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { CgMinimizeAlt } from "react-icons/cg";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { useWindowSize } from "react-use";
import { FormattedMessage } from "react-intl";

import { setSelectedTaskId } from "../../../../features/counter/SelectedTaskIdSlice";
import { setActiveIndex } from "../../../../features/counter/ActiveIndexSlice";
import DropdownTaskOptions from "../../../Dropdown/DropdownTaskOptions";
import { setTaskActivityVisibility } from "../../../../features/counter/taskActivitySlice";
import { setIsExpanded } from "../../../../features/counter/ExpandedSlice";

const Navbar = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const isTaskActivityVisible = useSelector(
    (state) => state.isTaskActivityVisible.value
  );
  const isExpanded = useSelector((state) => state.isExpanded.value);
  const label = isExpanded ? (
    <FormattedMessage id="contract" />
  ) : (
    <FormattedMessage id="expand" />
  );

  const closeView = () => {
    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));
    dispatch(setIsExpanded(false));
  };

  const expandScreen = () => {
    dispatch(setIsExpanded(!isExpanded));
  };

  const toggleTaskActivityVisibility = () => {
    dispatch(setTaskActivityVisibility(!isTaskActivityVisible));
  };

  return (
    <Flex
      h="55px"
      w="100%"
      justifyContent="space-between"
      px="10px"
      my="10px"
      alignItems="center"
    >
      <Tooltip label={<FormattedMessage id="hide_detail_panel" />}>
        <Button variant="ghost" px="0px" onClick={() => closeView()}>
          <FiChevronsRight size={19} />
        </Button>
      </Tooltip>
      <List display="flex" alignItems="center" gap="20px">
        {width >= 770 ? (
          <ListItem>
            <Tooltip label={label}>
              <Button variant="ghost" onClick={expandScreen}>
                {isExpanded ? <CgMinimizeAlt /> : <AiOutlineExpandAlt />}
              </Button>
            </Tooltip>
          </ListItem>
        ) : null}
        <ListItem>
          <Tooltip label={<FormattedMessage id="toggle_task_activity" />}>
            <Button variant="ghost" onClick={toggleTaskActivityVisibility}>
              <MdOutlineHistoryToggleOff />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem>
          <DropdownTaskOptions />
        </ListItem>
      </List>
    </Flex>
  );
};

export default Navbar;
