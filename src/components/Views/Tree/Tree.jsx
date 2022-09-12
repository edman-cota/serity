/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
import React from "react";
import Split from "react-split";
import { HotKeys } from "react-hotkeys";

import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useSplitSizes } from "../../../hooks/useSplitSizes";
import TreeTask from "./TreeTask";
import "../../Web/web.css";
import { setSidebarVisibility } from "../../../features/counter/SidebarVisibilitySlice";

const Tree = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useLocalStorage("show-sidebar", false);
  const { sizes, minSize } = useSplitSizes();
  const selectedTaskId = useSelector((state) => state.selectedTaskId.value);

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
      <Split
        sizes={selectedTaskId === "" ? [100, 0] : sizes}
        maxSize={[Infinity, 500]}
        minSize={minSize}
        gutterSize={0}
        style={{
          height: "100vh",
          display: "flex",
          width: "100%",
        }}
        onDragEnd={function (newSizes) {
          localStorage.setItem("split-sizes", JSON.stringify(newSizes));
        }}
      >
        <Outlet />
        <TreeTask />
      </Split>
    </HotKeys>
  );
};

export default Tree;
