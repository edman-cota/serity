import React from "react";
import { Button, Tooltip } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { setShowAddTask } from "../../features/counter/ShowAddTaskSlice";

const NavItemAddTask = () => {
  const dispatch = useDispatch();
  const showAddTask = useSelector((state) => state.showAddTask.value);

  const showAddTaskFunction = () => {
    dispatch(setShowAddTask(!showAddTask));
  };

  return (
    <Tooltip label="Create new task &#183; Ctrl + N" openDelay={700}>
      <Button variant="ghost" onClick={showAddTaskFunction}>
        <AiOutlinePlus />
      </Button>
    </Tooltip>
  );
};

export default NavItemAddTask;
