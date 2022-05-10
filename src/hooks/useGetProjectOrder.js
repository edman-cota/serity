/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase";

export const useGetProjectOrder = () => {
  const [projectOrder, setProjectOrder] = useState([]);
  const [user] = useAuthState(auth);

  // RETRIEVE PROJECTS ORDER
  useEffect(() => {
    database.ref(`${user?.uid}/projectOrder`).on("value", (snapshot) => {
      const list = [];
      snapshot.forEach((snap) => {
        list.push(snap.val());
      });

      setProjectOrder(list);
    });
  }, [user?.uid]);

  return { projectOrder };
};
