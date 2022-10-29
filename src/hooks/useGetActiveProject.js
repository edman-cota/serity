/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import database, { auth } from "../firebase.ts"

export const useGetActiveProject = () => {
  const [activeProject, setActiveProject] = useState([])
  const [user] = useAuthState(auth)

  // RETRIEVE PROJECTS ORDER
  useEffect(() => {
    database.ref(`${user?.uid}/activeProject`).on("value", (snapshot) => {
      const list = []
      snapshot.forEach((snap) => {
        list.push(snap.val())
      })

      setActiveProject(list)
    })
  }, [user?.uid])

  return { activeProject }
}
