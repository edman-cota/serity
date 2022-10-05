/* eslint-disable operator-linebreak */
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Activity from "./Activity.tsx";
import "./Activities.scss";
import useGetActivities from "../../hooks/useGetActivities";
import EmptyEditor from "../EmptyEditor/EmptyEditor.tsx";

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
      <Flex mb="20px">
        <Text fontSize="18px" pl="8px" fontWeight={600}>
          Task activities
        </Text>
      </Flex>
      {!isLoading ? (
        <div className="timeline">
          <div className="timeline-body">
            {activities &&
              activities
                .slice(0)
                .reverse()
                .map((data) => (
                  <Activity
                    key={data.id}
                    username={data.username}
                    content={data.content}
                    description={data.description}
                    type={data.type}
                    priority={data.priority}
                    due={data.due}
                    createdAt={data.createdAt}
                  />
                ))}
          </div>
        </div>
      ) : (
        <EmptyEditor />
      )}
    </Flex>
  );
};

export default Activities;
