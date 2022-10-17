import React from "react";
import { FormattedMessage } from "react-intl";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
  DarkMode,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import { VscListSelection } from "react-icons/vsc";
import { IoChevronDownOutline } from "react-icons/io5";
import { HiViewBoards } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";

import View from "./View.tsx";
import { auth } from "../../firebase.ts";
import { setSelectedTaskId } from "../../features/counter/selectedTaskIdSlice.ts";
import { setActiveIndex } from "../../features/counter/activeIndexSlice.ts";

const ViewsItem = () => {
  const dispatch = useDispatch();
  const { project } = useParams();
  const [searchParams] = useSearchParams();
  const [user] = useAuthState(auth);

  const username = user?.email.split("@")[0];

  const views = ["tree", "kanban", "calendar"];
  const icons = {
    0: VscListSelection,
    1: HiViewBoards,
    2: BsFillCalendarMinusFill,
  };

  /*
   *Clean the current screen global variables
   *Save new view in local storage
   */
  const clearActiveTask = (view) => {
    localStorage.setItem("view", view);

    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        righticon={<IoChevronDownOutline />}
      >
        <View view={searchParams.get("view")} />
      </MenuButton>
      <DarkMode>
        <MenuList borderRadius="base" border="0px" bg="white">
          {views.map((view, index) => {
            const Icon = icons[index];
            return (
              <NavLink
                key={view}
                onClick={() => clearActiveTask(view)}
                to={`/web/${username}/${project}?view=${view}`}
              >
                <MenuItem
                  color="rgb(66, 72, 85)"
                  w="90%"
                  h="38px"
                  mx="auto"
                  borderRadius="base"
                  icon={<Icon />}
                  _hover={{ backgroundColor: "rgb(244, 246, 248)" }}
                >
                  <Text
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text as="span" ml="6px" fontSize="14px">
                      <FormattedMessage id={view} />
                    </Text>
                    <Text as="span">
                      {searchParams.get("view") === view ? (
                        <FiCheck color="black" />
                      ) : null}
                    </Text>
                  </Text>
                </MenuItem>
              </NavLink>
            );
          })}
        </MenuList>
      </DarkMode>
    </Menu>
  );
};

export default ViewsItem;
