/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase.ts";

export const useGetColumnOrder = () => {
  const [columnOrder, setColumnOrder] = useState([]);
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [user] = useAuthState(auth);
  const workingProject = useSelector((state) => state.workingProject.value);

  useEffect(() => {
    database
      .ref(`${user?.uid}/projects/${workingProject.id}/columnOrder`)
      .on("value", (snapshot) => {
        const list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });

        setColumnOrder(list);
      });
  }, [user?.uid, workingProject.id]);

  // GET COLUMNS
  useEffect(() => {
    database.ref(`${user?.uid}/columns`).on("value", (snapshot) => {
      const list = {};
      snapshot.forEach((snap) => {
        list[snap.val().id] = snap.val();
      });

      setColumns(list);
    });
  }, [user?.uid]);

  // GET TASKS
  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on("value", (snapshot) => {
      const list = {};
      snapshot.forEach((snap) => {
        list[snap.val().id] = snap.val();
      });

      setTasks(list);
    });
  }, [user?.uid]);

  return { columnOrder, columns, tasks };
};
