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
import { CgArrowsExpandLeft } from "react-icons/cg";

import { setSelectedTaskId } from "../../../../features/counter/SelectedTaskIdSlice";
import { setActiveIndex } from "../../../../features/counter/ActiveIndexSlice";
import DropdownTaskOptions from "../../../Dropdown/DropdownTaskOptions";
import "./Navbar.scss";
import { setTaskActivityVisibility } from "../../../../features/counter/taskActivitySlice";

const Navbar = () => {
  const iconColor = useColorModeValue("#94959B", "#88898D");
  const dispatch = useDispatch();
  const isTaskActivityVisible = useSelector(
    (state) => state.isTaskActivityVisible.value
  );

  const closeView = () => {
    localStorage.setItem("split-sizes", JSON.stringify([100, 0]));
    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));
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
        <ListItem>
          <Tooltip label="Expand screen">
            <Button variant="ghost">
              <CgArrowsExpandLeft />
            </Button>
          </Tooltip>
        </ListItem>
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
