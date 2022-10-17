import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import database, { auth } from "../firebase.ts";

const useGetActivities = () => {
  const [activities, setActivities] = useState([]);
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);
  const task = useSelector((state) => state.task.value);

  // RETRIEVE ACTIVITIES
  useEffect(() => {
    database.ref(`${user?.uid}/activities`).on("value", (snapshot) => {
      setIsLoading(true);
      const list = [];
      snapshot.forEach((snap) => {
        if (snap.val().taskId === task.id) {
          list.push(snap.val());
        }
      });

      setActivities(list);
      setIsLoading(false);
    });
  }, [user?.uid, task.id]);

  return { activities, isLoading };
};

export default useGetActivities;
