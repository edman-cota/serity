/* eslint-disable operator-linebreak */
import React from "react";
import { Flex } from "@chakra-ui/react";
import "./Activities.scss";
import useGetActivities from "../../hooks/useGetActivities";
import LoadingScreen from "../EmptyEditor/LoadingScreen.tsx";
import TimelineHeader from "./TimelineHeader.tsx";
import TimelineBody from "./TimelineBody.tsx";

const Activities = () => {
  const { activities, isLoading } = useGetActivities();

  return (
    <Flex
      w="100%"
      h="calc(100vh - 108.55px)"
      direction="column"
      mx="0px"
      mb="20px"
      overflowY="auto"
    >
      <TimelineHeader />
      {!isLoading ? (
        <TimelineBody activities={activities} />
      ) : (
        <LoadingScreen />
      )}
    </Flex>
  );
};

export default Activities;
