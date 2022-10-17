import React from "react";
import { Button, Tooltip } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlinePlus } from "react-icons/hi";
import { FormattedMessage } from "react-intl";
import { setShowAddTask } from "../../features/counter/ShowAddTaskSlice";

const NavItemAddTask = () => {
  const dispatch = useDispatch();
  const showAddTask = useSelector((state) => state.showAddTask.value);

  const showAddTaskFunction = () => {
    dispatch(setShowAddTask(!showAddTask));
  };

  return (
    <Tooltip label={<FormattedMessage id="create_new_task" />} openDelay={700}>
      <Button onClick={showAddTaskFunction}>
        <HiOutlinePlus size={18} />
      </Button>
    </Tooltip>
  );
};

export default NavItemAddTask;
