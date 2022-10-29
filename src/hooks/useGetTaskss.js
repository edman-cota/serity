/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import database, { auth } from "../firebase.ts"

export const useGetTaskss = () => {
  const [user] = useAuthState(auth)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on("value", (snapshot) => {
      const taskList = []
      snapshot.forEach((snap) => {
        if (snap.val().completed === 1) {
          taskList.push(snap.val())
        }
      })

      setTasks(taskList)
    })
  }, [user?.uid])

  return [tasks]
}
