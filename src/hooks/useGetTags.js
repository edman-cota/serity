/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import database, { auth } from "../firebase.ts"

export const useGetTags = () => {
  const [user] = useAuthState(auth)
  const [tags, setTags] = useState()

  // RETRIEVE TAGS
  useEffect(() => {
    database.ref(`${user?.uid}/tags`).on("value", (snapshot) => {
      const taskList = []
      snapshot.forEach((snap) => {
        taskList.push(snap.val())
      })

      setTags(taskList)
    })
  }, [user?.uid])

  return { tags }
}
