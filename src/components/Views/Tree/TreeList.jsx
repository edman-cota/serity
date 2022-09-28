import React from "react";
// eslint-disable-next-line object-curly-newline
import { Flex, List, VStack, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Item from "../../Item/Item";
import AddTask from "../../Item/AddTask";
import NoTaskEditor from "../../EmptyEditor/NoTaskEditor.tsx";
import EmptyEditor from "../../EmptyEditor/EmptyEditor.tsx";
import { useGetTasks } from "../../../hooks/useGetTasks";
import { useGetTodayTasks } from "../../../hooks/useGetTodayTasks";

import Navbar from "../../Navbar/Navbar";
import { useSplitSizes } from "../../../hooks/useSplitSizes";

const TreeList = () => {
  const { project } = useParams();
  const { sizes, paneDisplay } = useSplitSizes();
  const { tasks, completedTasks, isLoading } = useGetTasks();
  const { todayTasks } = useGetTodayTasks();
  const selectedTaskId = useSelector((state) => state.selectedTaskId.value);
  const showAddTask = useSelector((state) => state.showAddTask.value);
  const showCompleted = useSelector((state) => state.showCompleted.value);
  const display = selectedTaskId !== "" ? paneDisplay.at(0) : paneDisplay.at(1);
  const widths = selectedTaskId !== "" ? `${sizes.at(0)}%` : "100%";

  return !isLoading ? (
    <VStack h="100vh" w={widths} display={display}>
      <Navbar />
      <VStack w="98%" mx="auto" h="calc(100vh - 90px)" overflowY="auto">
        {project !== "today" ? (
          <VStack w="100%" pb="40px">
            {tasks.length <= 0 && !showAddTask ? (
              <EmptyEditor />
            ) : (
              <List width="95%" m="auto" maxWidth={1000}>
                {tasks.map((data, index) => (
                  <Item key={data.id} index={index} task={data} />
                ))}
              </List>
            )}
            {showAddTask ? <AddTask /> : null}
          </VStack>
        ) : (
          <VStack w="100%" border="1px">
            {todayTasks.length <= 0 && !showAddTask ? (
              <NoTaskEditor />
            ) : (
              <List width="95%" m="auto" maxWidth={1000}>
                {todayTasks.map((data, index) => (
                  <Item key={data.id} index={index} task={data} />
                ))}
              </List>
            )}
            {showAddTask ? <AddTask /> : null}
          </VStack>
        )}

        {showCompleted && completedTasks.length > 0 ? (
          <VStack w="100%">
            <Flex width="95%" mx="auto" mt="30px" maxWidth={1000}>
              <Text pl="12px">
                Completed
                <Text as="span" pl="12px" color="rgba(255, 255, 255, 0.7)">
                  {completedTasks.length}
                </Text>
              </Text>
            </Flex>

            <List width="95%" m="auto" maxWidth={1000}>
              {completedTasks.map((data, index) => (
                <Item key={data.id} index={index} task={data} />
              ))}
            </List>
          </VStack>
        ) : null}
      </VStack>
    </VStack>
  ) : (
    <VStack h="100vh">
      <Navbar />
      <VStack w="98%" mx="auto" h="calc(100vh - 90px)">
        <Text>Loading...</Text>
      </VStack>
    </VStack>
  );
};

export default TreeList;
