/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line object-curly-newline
import { Flex, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import ProfileItem from "./ProfileItem";
import ToggleSidebarVisibility from "./ToggleSidebarVisibility";
// import NotificationsItem from "./NotificationsItem.tsx";
import NavItemAddTask from "./NavItemAddTask";
import SortItem from "./SortItemSwitcher";
import ProjectName from "./ProjectName";
import { auth } from "../../firebase";
// import SearchModal from "../Modals/SearchModal.js";
import ShortcutsModal from "../Modals/ShortcutsModal";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [scrolled, setScrolled] = useState(false);
  const [isFixed] = useState(true);
  const { project } = useParams();

  let navbarPosition = "relative";
  let navbarFilter = "none";
  const navbarBackdrop = "blur(21px)";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading, navigate]);

  if (isFixed === true) {
    if (scrolled === true) {
      navbarPosition = "fixed";
      navbarShadow = useColorModeValue(
        "0px 7px 23px rgba(0, 0, 0, 0.05)",
        "none"
      );
      navbarBg = useColorModeValue(
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
      );
      navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
      navbarFilter = useColorModeValue(
        "none",
        "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
      );
    }
  }

  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <Flex
      // position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      h="90px !important"
      borderRadius="16px"
      alignItems="center"
      w="98%"
      mx="auto"
    >
      <Flex w="95%" mx="auto" maxW="1000px !important">
        <Flex flex="1" alignItems="center" gap="18px">
          <ToggleSidebarVisibility />
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
            <ListItem mr="10px">
              <ShortcutsModal />
              {/* <SearchModal /> */}
            </ListItem>
            <ListItem mr="10px">
              {/* <ColorModeSwitcher /> */}
              {/* <NotificationsItem /> */}
            </ListItem>
            <ListItem mr="10px">
              <ProfileItem />
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
