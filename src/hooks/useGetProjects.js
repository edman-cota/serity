/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase";

export const useGetProjects = () => {
  const [user] = useAuthState(auth);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   // RETRIEVE PROJECT
  useEffect(() => {
    database.ref(`${user?.uid}/projects`).on("value", (snapshot) => {
      setIsLoading(true);
      // let list = {};
      const list = [];
      snapshot.forEach((snap) => {
        // list[snap.val().id] = snap.val();
        list.push(snap.val());
      });
      setProjects(list);
      setIsLoading(false);
    });
  }, [user?.uid, isLoading]);

  return { projects, isLoading };
};
