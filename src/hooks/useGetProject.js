/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase.ts";

export const useGetProject = () => {
  const [user] = useAuthState(auth);
  const [project, setProject] = useState([]);
  const workingProject = useSelector((state) => state.workingProject.value);

  useEffect(() => {
    database.ref(`${user?.uid}/projects`).on("value", (snapshot) => {
      const taskList = [];
      snapshot.forEach((snap) => {
        if (snap.val().id === workingProject.id) {
          taskList.push(snap.val());
        }
      });

      setProject(taskList);
    });
  }, [user?.uid, workingProject.id]);

  return { project };
};
