/* eslint-disable operator-linebreak */
import React from "react";
import { Flex } from "@chakra-ui/react";
import Activity from "./Activity.tsx";
import "./Activities.scss";
import useGetActivities from "../../hooks/useGetActivities";

const Activities = () => {
  const { activities } = useGetActivities();

  return (
    <Flex
      w="100%"
      h="calc(100vh - 108.55px)"
      direction="column"
      mx="0px"
      mt="30px"
      mb="20px"
      overflowY="auto"
    >
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
    </Flex>
  );
};

export default Activities;
