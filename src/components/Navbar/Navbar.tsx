/* eslint-disable consistent-return */
import React, { useEffect, memo } from "react";
import { Flex, List, ListItem } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
// import { Button } from "react-loading-arleth";
// import "react-loading-arleth/dist/index.css";
import ToggleSidebarVisibility from "./ToggleSidebarVisibility";
import NavItemAddTask from "./NavItemAddTask";
import ProjectName from "./ProjectName";
import { auth } from "../../firebase";
import ColorModeSwitcher from "./ColorModeSwitcher";
import ProjectOptionsMenu from "../Menus/ProjectOptionsMenu";

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
              <ProjectOptionsMenu name="" id="" emoji="" />
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Navbar);
