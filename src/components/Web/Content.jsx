import React from "react";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Tree from "../Views/Tree/Tree";
import Kanban from "../Views/Kanban/Kanban.tsx";
import Calendar from "../Views/Calendar/Calendar";

const Content = () => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen.value);

  const margin = isSidebarOpen ? "320px" : "0px";

  return (
    <Flex flex={1} ml={margin}>
      {view === "kanban" ? <Kanban /> : null}
      {view === "tree" ? <Tree /> : null}
      {view === "calendar" ? <Calendar /> : null}
    </Flex>
  );
};

export default Content;
