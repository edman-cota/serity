/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase";

export const useGetEvents = () => {
  const [user] = useAuthState(auth);
  const [tasks, setTasks] = useState([]);

  // RETRIEVE EVENTS
  useEffect(() => {
    database.ref(`${user?.uid}/events`).on("value", (snapshot) => {
      const taskList = [];
      snapshot.forEach((snap) => {
        taskList.push(snap.val());
      });

      setTasks(taskList);
    });
  }, [user?.uid]);

  return { tasks };
};
