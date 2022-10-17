/* eslint-disable consistent-return */
import React, { useEffect, memo } from "react";
// eslint-disable-next-line object-curly-newline
import { Flex, List, ListItem } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
// import { Button } from "react-loading-arleth";
// import "react-loading-arleth/dist/index.css";

// import ProfileItem from "./ProfileItem";
import ToggleSidebarVisibility from "./ToggleSidebarVisibility";
// import NotificationsItem from "./NotificationsItem.tsx";
import NavItemAddTask from "./NavItemAddTask";
// import SortItem from "./SortItemSwitcher";
import ProjectName from "./ProjectName";
import { auth } from "../../firebase.ts";
// import SearchModal from "../Modals/SearchModal.js";
import ColorModeSwitcher from "./ColorModeSwitcher.tsx";
// import ShortcutsModal from "../Modals/ShortcutsModal";
// import DropdownTaskOptions from "../Dropdown/DropdownTaskOptions";
import ProjectMore from "../Workspace/ProjectMoreIcon";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { project } = useParams();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading, navigate]);

  return (
    <Flex w="100%" mt="20px">
      <Flex w="95%" mx="auto" maxW="950px">
        <Flex flex="1" alignItems="center" gap="20px">
          <ToggleSidebarVisibility />
          <ProjectName />
        </Flex>
        <Flex flex="1" justifyContent="flex-end">
          <List display="flex" alignItems="center" gap="20px">
            {project !== "today" ? (
              <ListItem>
                <NavItemAddTask />
              </ListItem>
            ) : null}
            <ListItem>
              <ColorModeSwitcher />
            </ListItem>
            <ListItem>
              <ProjectMore />
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Navbar);
