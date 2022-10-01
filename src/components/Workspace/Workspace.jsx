/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React from "react";
import { Text, VStack, HStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { setWorkingProject } from "../../features/counter/workingProjectSlice";

import ProjectMoreIcon from "./ProjectMoreIcon";
import CreateProject from "../Modals/CreateProject";
import { useGetProjects } from "../../hooks/useGetProjects";
import { auth } from "../../firebase";
import "./Workspace.scss";
import { setSelectedTaskId } from "../../features/counter/SelectedTaskIdSlice";
import { setActiveIndex } from "../../features/counter/ActiveIndexSlice";
import { setShowAddTask } from "../../features/counter/ShowAddTaskSlice";
import "../Sidebar/Sidebar.scss";

const Workspace = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const { projects } = useGetProjects();

  const username = user?.email.split("@")[0];

  let view = localStorage.getItem("view");
  if (!view) {
    view = "tree";
  }

  const navigateTo = (project) => {
    // Guarda localmente
    dispatch(setWorkingProject(project));
    localStorage.setItem("project", project.name);

    // close task detail sidebar
    localStorage.setItem("split-sizes", JSON.stringify([100, 0]));
    dispatch(setSelectedTaskId(""));
    dispatch(setActiveIndex(""));
    dispatch(setShowAddTask(false));
  };

  return (
    <VStack w="100%" h="calc(100vh - 160px)" pt="30px">
      <VStack alignItems="center" position="relative" w="100%">
        <nav style={{ width: "100%" }}>
          <ul style={{ margin: "auto", width: "90%" }}>
            {projects?.map((project) => (
              <li key={project.id}>
                <NavLink
                  key={project.id}
                  to={`/web/${username}/p/${project?.name}?view=${view}`}
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
                  <Text className="active-task-count">
                    {/* {project?.activeCount} */}
                  </Text>
                  <ProjectMoreIcon
                    name={project?.name}
                    emoji={project?.emoji}
                    id={project?.id}
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </VStack>
    </VStack>
  );
};

export default Workspace;
