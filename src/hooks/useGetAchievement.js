/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase.ts";

export const useGetAchievement = () => {
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // RETRIEVE TASKS DETAIL
  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on("value", (snapshot) => {
      const taskList = [];
      const completedTask = [];
      snapshot.forEach((snap) => {
        if (snap.val().completed === 0) {
          taskList.push(snap.val());
        }
        if (snap.val().completed === 1) {
          completedTask.push(snap.val());
        }
      });

      setTasks(taskList);
      setCompletedTasks(completedTask);
    });
  }, [user?.uid]);

  return { tasks, completedTasks };
};
