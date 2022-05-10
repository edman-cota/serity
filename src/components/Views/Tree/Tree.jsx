/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
import React from "react";
import Split from "react-split";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useSplitSizes } from "../../../hooks/useSplitSizes";
import TreeTask from "./TreeTask";
import "../../Web/web.css";

const Tree = () => {
  const { sizes, minSize } = useSplitSizes();
  const selectedTaskId = useSelector((state) => state.selectedTaskId.value);

  // Use local storage to save the most recent state
  let localSizes = localStorage.getItem("split-sizes");
  if (localSizes) {
    localSizes = JSON.parse(localSizes);
  } else {
    localSizes = [65, 35]; // default sizes in %
  }

  return (
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
  );
};

export default Tree;
