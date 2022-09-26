import React from "react";
import PropTypes from "prop-types";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import { useDispatch } from "react-redux";
import { setActiveIndex } from "../../features/counter/ActiveIndexSlice";
import { setSelectedTaskId } from "../../features/counter/SelectedTaskIdSlice";
import { useSplitSizes } from "../../hooks/useSplitSizes";
import { setTask } from "../../features/counter/TaskSlice";
import { setSidebarVisibility } from "../../features/counter/SidebarVisibilitySlice";

const ItemTitle = ({ task, index }) => {
  const { sizes } = useSplitSizes();
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const color = useColorModeValue("#3c3b7b", "#dcddde");

  const onSelectItem = (id, itemIndex) => {
    dispatch(setSelectedTaskId(id));
    dispatch(setTask(task));
    dispatch(setActiveIndex(itemIndex));

    localStorage.setItem("split-sizes", JSON.stringify(sizes));

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
      <Text noOfLines={1} color={color} isTruncated>
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
