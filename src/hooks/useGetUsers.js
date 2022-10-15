/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from "react";
import { db } from "../firebase.ts";

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log(db);
    try {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((query) => {
            const data = query.data();
            setUsers((arr) => [...arr, data]);
          });
        });
    } catch (err) {
      return err;
    }
  }, []);

  return { users };
};
