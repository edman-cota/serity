/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
import React from "react";
import { Flex } from "@chakra-ui/react";
import { HotKeys } from "react-hotkeys";

import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import { useLocalStorage } from "../../../hooks/useLocalStorage.ts";
import TreeTask from "./TreeTask";
import "../../Web/web.css";
import { setSidebarVisibility } from "../../../features/counter/SidebarVisibilitySlice";

const Tree = () => {
  const dispatch = useDispatch();
  // const [isOpen, setOpen] = useLocalStorage("show-sidebar", false);
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen.value);

  const keyMap = {
    DELETE_NODE: "Ctrl+b",
  };

  const handlers = {
    DELETE_NODE: () => {
      dispatch(setSidebarVisibility(!isSidebarOpen));
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
