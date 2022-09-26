/* eslint-disable comma-dangle */
import React from "react";
import {
  Flex,
  List,
  ListItem,
  useColorModeValue,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { FiChevronsRight } from "react-icons/fi";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { CgArrowsExpandLeft, CgMinimizeAlt } from "react-icons/cg";
import { useWindowSize } from "react-use";

import { setSelectedTaskId } from "../../../../features/counter/SelectedTaskIdSlice";
import { setActiveIndex } from "../../../../features/counter/ActiveIndexSlice";
import DropdownTaskOptions from "../../../Dropdown/DropdownTaskOptions";
import "./Navbar.scss";
import { setTaskActivityVisibility } from "../../../../features/counter/taskActivitySlice";
import { setIsExpanded } from "../../../../features/counter/ExpandedSlice";

const Navbar = () => {
  const { width } = useWindowSize();
  const iconColor = useColorModeValue("#94959B", "#88898D");
  const dispatch = useDispatch();
  const isTaskActivityVisible = useSelector(
    (state) => state.isTaskActivityVisible.value
  );
  const isExpanded = useSelector((state) => state.isExpanded.value);
  const label = isExpanded ? "Contract" : "Expand";

  const closeView = () => {
    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));
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
      <Button
        variant="ghost"
        className="button-chevrons-right"
        px="0px"
        onClick={() => closeView()}
      >
        <FiChevronsRight
          className="fi-chevrons-right"
          size={19}
          color={iconColor}
        />
      </Button>
      <List display="flex" alignItems="center" gap="20px">
        {width >= 770 ? (
          <ListItem>
            <Tooltip label={label}>
              <Button variant="ghost" onClick={expandScreen}>
                {isExpanded ? <CgMinimizeAlt /> : <CgArrowsExpandLeft />}
              </Button>
            </Tooltip>
          </ListItem>
        ) : null}
        <ListItem>
          <Tooltip label="Toggle task activity">
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
