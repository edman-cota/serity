import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck, FiList } from "react-icons/fi";
import { HiViewBoards } from "react-icons/hi";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import { VscFilter, VscFilterFilled } from "react-icons/vsc";
import { setOrderBy } from "../../features/counter/OrderBySlice";
import { setActiveIndex } from "../../features/counter/ActiveIndexSlice";
import { setSelectedTaskId } from "../../features/counter/SelectedTaskIdSlice";
import { setShowCompleted } from "../../features/counter/ShowCompletedSlice";
import { useLocalStorage } from "../../hooks/useLocalStorage.ts";

const SortItem = () => {
  const dispatch = useDispatch();
  const [sortedBy, setSortedBy] = useLocalStorage("order-by", "custom");

  const filters = ["custom", "priority", "content"];
  const icons = { 0: FiList, 1: HiViewBoards, 2: BsFillCalendarMinusFill };
  const showCompleted = useSelector((state) => state.showCompleted.value);

  const updateSortedBy = (order) => {
    dispatch(setOrderBy(order));
    setSortedBy(order);
  };

  const handleShowCompletedTasks = () => {
    dispatch(setShowCompleted(!showCompleted));
    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));
  };

  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button} variant="ghost">
        {sortedBy === "custom" ? (
          <VscFilter />
        ) : (
          <VscFilterFilled color="#00B8D9" />
        )}
      </MenuButton>
      <MenuList>
        {filters.map((filter, index) => {
          const Icon = icons[index];
          return (
            <MenuItem
              key={filter}
              icon={<Icon />}
              onClick={() => updateSortedBy(filter)}
            >
              <Text
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text as="span" pl="6px" fontSize="14px">
                  <FormattedMessage id={filter} />
                </Text>
                {sortedBy === filter ? (
                  <Text as="span">
                    <FiCheck />
                  </Text>
                ) : null}
              </Text>
            </MenuItem>
          );
        })}
        <MenuItem
          icon={<VscFilter />}
          onClick={() => handleShowCompletedTasks()}
        >
          <Text
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {showCompleted ? (
              <Text as="span" pl="6px" fontSize="14px">
                Hide completed
              </Text>
            ) : (
              <Text as="span" pl="6px" fontSize="14px">
                Show completed
              </Text>
            )}
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortItem;
