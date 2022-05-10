import React from "react";
import { VStack } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import InputTaskTitle from "../Item/InputTaskTitle";
import DatePicker from "../RenderDate/DatePicker";
import Description from "./Description";

import "./DetailTab.scss";

const DetailTab = () => {
  const task = useSelector((state) => state.task.value);
  const workingProject = useSelector((state) => state.workingProject.value);

  return (
    <VStack h="100%" px="20px">
      <InputTaskTitle
        title={task.content}
        id={task.id}
        projectId={workingProject.id}
      />
      <br />
      <Description
        description={task.description}
        title={task.content}
        id={task.id}
        projectId={workingProject.id}
      />
      <br />
      <DatePicker />
    </VStack>
  );
};

export default DetailTab;
