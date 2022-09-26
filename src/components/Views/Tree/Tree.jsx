/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
import React from "react";
import { Flex } from "@chakra-ui/react";
import { HotKeys } from "react-hotkeys";

import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import TreeTask from "./TreeTask";
import "../../Web/web.css";
import { setSidebarVisibility } from "../../../features/counter/SidebarVisibilitySlice";

const Tree = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useLocalStorage("show-sidebar", false);
  // console.log(isOpen);
  // Use local storage to save the most recent state
  let localSizes = localStorage.getItem("split-sizes");
  if (localSizes) {
    localSizes = JSON.parse(localSizes);
  } else {
    localSizes = [65, 35]; // default sizes in %
  }

  const keyMap = {
    DELETE_NODE: "Ctrl+b",
  };

  const handlers = {
    DELETE_NODE: () => {
      setOpen(!isOpen);
      dispatch(setSidebarVisibility(!isOpen));
    },
  };

  return (
    <HotKeys
      keyMap={keyMap}
      handlers={handlers}
      allowChanges
      style={{
        height: "100vh",
        display: "flex",
        width: "100%",
      }}
    >
      <Flex w="100%">
        <Outlet />
        <TreeTask />
      </Flex>
    </HotKeys>
  );
};

export default Tree;
