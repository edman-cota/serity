/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { VStack, List } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListHeader from "./ListHeader.tsx";
import { useGetTasks } from "../../../hooks/useGetTasks";
import { useGetTodayTasks } from "../../../hooks/useGetTodayTasks";
import Item from "../../Item/Item";
import AddTask from "../../Item/AddTask";
import LoadingScreen from "../../EmptyEditor/LoadingScreen.tsx";

const TreeList = () => {
  const { project } = useParams();
  const { tasks, completedTasks, isLoading } = useGetTasks();
  const { todayTasks } = useGetTodayTasks();
  const showAddTask = useSelector((state) => state.showAddTask.value);
  const showCompleted = useSelector((state) => state.showCompleted.value);

  return (
    <>
      {!isLoading ? (
        <VStack w="98%" h="calc(100vh - 76px)" overflowY="auto">
          {project !== "today" ? (
            <VStack w="100%" pb="40px">
              <List width="95%" m="auto" maxWidth={880}>
                {tasks.map((data, index) => (
                  <Item key={data.id} index={index} task={data} />
                ))}
              </List>
              {showAddTask ? <AddTask /> : null}
            </VStack>
          ) : (
            <VStack w="100%">
              <List width="95%" m="auto" maxWidth={1000}>
                {todayTasks.map((data, index) => (
                  <Item key={data.id} index={index} task={data} />
                ))}
              </List>
              {showAddTask ? <AddTask /> : null}
            </VStack>
          )}

          {showCompleted && completedTasks.length > 0 ? (
            <VStack w="100%" pb="40px">
              <ListHeader count={completedTasks.length} />
              <List width="95%" m="auto" maxWidth={880}>
                {completedTasks.map((data, index) => (
                  <Item key={data.id} index={index} task={data} />
                ))}
              </List>
            </VStack>
          ) : null}
        </VStack>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default TreeList;
