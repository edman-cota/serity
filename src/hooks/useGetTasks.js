/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import database, { auth } from "../firebase.ts";

export const useGetTasks = () => {
  const [user] = useAuthState(auth);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const orderBy = useSelector((state) => state.orderBy.value);
  const workingProject = useSelector((state) => state.workingProject.value);

  useEffect(() => {
    database
      .ref(`${user?.uid}/tasks`)
      .orderByChild(orderBy)
      .on("value", (snapshot) => {
        setIsLoading(true);
        const taskList = [];
        const completedTask = [];
        snapshot.forEach((snap) => {
          if (
            snap.val().projectId ===
            window.localStorage.getItem("working-project")
          ) {
            if (snap.val().completed === 0) {
              taskList.push(snap.val());
            }
            if (snap.val().completed === 1) {
              completedTask.push(snap.val());
            }
          }
        });

        if (orderBy === "priority") {
          setTasks(taskList.sort((a, b) => b.priority - a.priority));
        } else {
          setTasks(taskList);
        }

        // setCompletedTasks(completedTask);
        setCompletedTasks(
          completedTask.sort(
            (a, b) =>
              new Date(b.completedAt).getTime() -
              new Date(a.completedAt).getTime()
          )
        );
        setIsLoading(false);
      });
  }, [user?.uid, workingProject.id, orderBy, isLoading]);

  return { tasks, completedTasks, isLoading };
};
