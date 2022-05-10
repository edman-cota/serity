import React from "react";
import { Flex } from "@chakra-ui/react";
import "../Activities/Activities.scss";
import "../Activities/Activity.scss";
import Content from "./Content";
import Sidebar from "../Sidebar/Sidebar";

const Updates = () => (
  <Flex width="100%" height="100%" flex={1}>
    <Sidebar />
    <Content />
  </Flex>
);

export default Updates;
