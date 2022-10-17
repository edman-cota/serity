import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase";
import type { RootState } from "../store";

export const useGetTask = () => {
  const [user] = useAuthState(auth);
  const [task, setTask] = useState<any[]>([]);
  const selectedTaskId = useSelector(
    (state: RootState) => state.selectedTaskId.value
  );

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on("value", (snapshot) => {
      const taskList: any[] = [];
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
