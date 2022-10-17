import React from "react";
import PropTypes from "prop-types";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import { useDispatch } from "react-redux";
import { setActiveIndex } from "../../features/counter/activeIndexSlice.ts";
import { setSelectedTaskId } from "../../features/counter/selectedTaskIdSlice.ts";
import { setTask } from "../../features/counter/taskSlice.ts";
import { setSidebarVisibility } from "../../features/counter/sidebarVisibilitySlice.ts";
import { setTaskActivityVisibility } from "../../features/counter/taskActivitySlice.ts";

const ItemTitle = ({ task, index }) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const color = useColorModeValue("#181d25", "whiteAlpha.900");

  const onSelectItem = (id, itemIndex) => {
    dispatch(setSelectedTaskId(id));
    dispatch(setTask(task));
    dispatch(setActiveIndex(itemIndex));
    dispatch(setTaskActivityVisibility(false));

    if (width <= 1210) {
      dispatch(setSidebarVisibility(false));
      localStorage.setItem("show-sidebar", "false");
    }
  };

  return (
    <Flex
      flex={3}
      h="100%"
      alignItems="center"
      onClick={() => onSelectItem(task.id, index)}
    >
      <Text className="text-item" color={color} fontSize="15px">
        {task.content}
      </Text>
    </Flex>
  );
};

ItemTitle.propTypes = {
  task: PropTypes.shape({ id: PropTypes.string, content: PropTypes.string }),
  index: PropTypes.number,
};

ItemTitle.defaultProps = {
  task: {},
  index: 0,
};

export default ItemTitle;
