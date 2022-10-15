/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { memo } from "react";
import { List, Text, ListItem, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { setWorkingProject } from "../../features/counter/workingProjectSlice";
import { useGetProjects } from "../../hooks/useGetProjects";
import { auth } from "../../firebase.ts";
import "./Workspace.scss";
import { setSelectedTaskId } from "../../features/counter/SelectedTaskIdSlice";
import { setActiveIndex } from "../../features/counter/ActiveIndexSlice";
import { setShowAddTask } from "../../features/counter/ShowAddTaskSlice";
import "../Sidebar/Sidebar.scss";
import { beautifyUrl } from "../../helpers/beautifyUrl.ts";
import { beautifyUsername } from "../../helpers/beautifyUsername.ts";

const Workspace = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const { projects } = useGetProjects();

  const username = beautifyUsername(user?.email);

  const navigateTo = (project) => {
    // Guarda localmente
    dispatch(setWorkingProject(project));
    localStorage.setItem("project", project.name);
    localStorage.setItem("working-project", project.id);
    // close task detail sidebar
    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));
    dispatch(setShowAddTask(false));
  };

  return (
    <VStack w="100%" h="calc(100vh - 160px)" pt="30px">
      <VStack alignItems="center" position="relative" w="100%">
        <nav style={{ width: "100%" }}>
          <List w="90%" mx="auto">
            {projects?.map((project) => (
              <ListItem key={project.id} color="hsla(0,0%,100%,.87)">
                <NavLink
                  key={project.id}
                  to={`/${username}/${beautifyUrl(project?.name)}`}
                  className={({ isActive }) =>
                    isActive ? "i-active" : "i-link"
                  }
                >
                  <Text as="span" w="30px">
                    {project?.emoji}
                  </Text>
                  <Text
                    onClick={() => navigateTo(project)}
                    className="sidebar-item-project"
                  >
                    {project?.name}
                  </Text>
                  {/* <Text className="active-task-count">
                    {project?.activeCount}
                  </Text> */}
                  {/* <ProjectMoreIcon
                    name={project?.name}
                    emoji={project?.emoji}
                    id={project?.id}
                  /> */}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </nav>
      </VStack>
    </VStack>
  );
};

export default memo(Workspace);
