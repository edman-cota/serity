/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useEffect, useState, memo } from "react";
// eslint-disable-next-line object-curly-newline
import { Flex, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useWindowSize } from "react-use";
// import { Button } from "react-loading-arleth";
// import "react-loading-arleth/dist/index.css";

import ProfileItem from "./ProfileItem";
import ToggleSidebarVisibility from "./ToggleSidebarVisibility";
// import NotificationsItem from "./NotificationsItem.tsx";
import NavItemAddTask from "./NavItemAddTask";
import SortItem from "./SortItemSwitcher";
import ProjectName from "./ProjectName";
import { auth } from "../../firebase";
// import SearchModal from "../Modals/SearchModal.js";
import ColorModeSwitcher from "./ColorModeSwitcher";
import ShortcutsModal from "../Modals/ShortcutsModal";
import DropdownTaskOptions from "../Dropdown/DropdownTaskOptions";
import DropdownProjectOptions from "../Dropdown/DropdownProjectOptions";

const Navbar = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const [user, loading] = useAuthState(auth);
  const [scrolled, setScrolled] = useState(false);
  const [isFixed] = useState(true);
  const { project } = useParams();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading, navigate]);

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <Flex w="100%" mt="20px">
      <Flex w="95%" mx="auto" maxW="950px">
        <Flex flex="1" alignItems="center" gap="18px">
          <ToggleSidebarVisibility />
          {/* <Button label="Arleth" /> */}
          {/* <ViewSwitcher /> */}
          {/* <SortItem /> */}
          <ProjectName />
        </Flex>
        <Flex flex="1" justifyContent="flex-end">
          <List display="flex" alignItems="center">
            {project !== "today" ? (
              <ListItem mr="10px">
                <NavItemAddTask />
              </ListItem>
            ) : null}
            {/* {width >= 770 ? (
              <ListItem mr="10px">
                <ShortcutsModal />
                 <SearchModal />
              </ListItem>
            ) : null} */}
            {/* <ListItem mr="10px">
              <ColorModeSwitcher />
            </ListItem> */}
            <ListItem>
              <DropdownProjectOptions />
            </ListItem>
            {/* <ListItem mr="10px">
              <ProfileItem />
            </ListItem> */}
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Navbar);
