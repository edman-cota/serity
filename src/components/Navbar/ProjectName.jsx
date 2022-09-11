/* eslint-disable react/jsx-indent */
import React from "react";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ProjectName = () => {
  const workingProject = useSelector((state) => state.workingProject.value);

  return (
    <Text bg="transparent" as="b">
      {workingProject.name}
    </Text>
  );
};
export default ProjectName;
