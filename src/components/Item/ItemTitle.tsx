import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import { useDispatch } from "react-redux";
import { setActiveIndex } from "../../features/counter/activeIndexSlice";
import { setSelectedTaskId } from "../../features/counter/selectedTaskIdSlice";
import { setTask } from "../../features/counter/taskSlice";
import { setSidebarVisibility } from "../../features/counter/sidebarVisibilitySlice";
import { setTaskActivityVisibility } from "../../features/counter/taskActivitySlice";
import { TaskProps } from "../../types/task.model";

interface Props {
  task: TaskProps;
  index: number;
}

const ItemTitle = ({ task, index }: Props) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const color = useColorModeValue("#181d25", "whiteAlpha.900");

  const onSelectItem = (id: string, itemIndex: number) => {
    dispatch(setSelectedTaskId(id));
    dispatch(setTask(task));
    dispatch(setActiveIndex(itemIndex));
    dispatch(setTaskActivityVisibility(false));

    if (width <= 1210) {
      dispatch(setSidebarVisibility(false));
    }
  };

  return (
    <Flex
      flex={3}
      h="100%"
      alignItems="center"
      onClick={() => onSelectItem(task.id || "today", index)}
    >
      <Text className="text-item" color={color} fontSize="15px">
        {task.content}
      </Text>
    </Flex>
  );
};

export default ItemTitle;
