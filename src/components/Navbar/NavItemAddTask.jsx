import React from "react";
import { useColorMode, Button, Tooltip } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlinePlus } from "react-icons/hi";
import { setShowAddTask } from "../../features/counter/ShowAddTaskSlice";

const NavItemAddTask = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const showAddTask = useSelector((state) => state.showAddTask.value);

  const showAddTaskFunction = () => {
    dispatch(setShowAddTask(!showAddTask));
  };

  return (
    <Tooltip label="Create new task &#183; Ctrl + N" openDelay={700}>
      <Button
        variant="ghost"
        onClick={showAddTaskFunction}
        _hover={{
          color: "rgb(35, 135, 251)",
          bg: colorMode === "dark" ? "gray.500" : "gray.100",
        }}
      >
        <HiOutlinePlus size={18} />
      </Button>
    </Tooltip>
  );
};

export default NavItemAddTask;
