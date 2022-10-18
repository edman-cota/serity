/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase";
import { TaskProps } from "../types/task.model";

export const useGetTodayTasks = () => {
  const [user] = useAuthState(auth);
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on("value", (snapshot) => {
      const taskList: TaskProps[] = [];
      snapshot.forEach((snap) => {
        if (snap.val().completed === 0) {
          if (snap.val().due !== undefined) {
            const now = new Date();
            const time = new Date(now.setDate(now.getDate())).toString();
            const dueAt = new Date(snap.val().due).toString().slice(0, 15);
            if (dueAt === time.slice(0, 15)) {
              taskList.push(snap.val());
            }
          }
        }
      });

      setTodayTasks(taskList);
    });
  }, [user?.uid]);

  return { todayTasks };
};
