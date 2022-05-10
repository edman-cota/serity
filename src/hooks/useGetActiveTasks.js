/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase";

export const useGetActiveTasks = () => {
  const [user] = useAuthState(auth);
  const [activeTasks, setActiveTasks] = useState([]);

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on("value", (snapshot) => {
      const taskList = [];
      snapshot.forEach((snap) => {
        if (snap.val().completed === 0) {
          taskList.push(snap.val());
        }
      });

      setActiveTasks(taskList);
    });
  }, [user?.uid]);

  return { activeTasks };
};
