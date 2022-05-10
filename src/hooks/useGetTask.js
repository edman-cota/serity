/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase";

export const useGetTask = () => {
  const [user] = useAuthState(auth);
  const [task, setTask] = useState([]);
  const selectedTaskId = useSelector((state) => state.selectedTaskId.value);

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on("value", (snapshot) => {
      const taskList = [];
      snapshot.forEach((snap) => {
        if (snap.val().completed === 0) {
          if (snap.val().id === selectedTaskId) {
            taskList.push(snap.val());
          }
        }
      });

      setTask(taskList);
    });
  }, [user?.uid, selectedTaskId]);

  return { task };
};
