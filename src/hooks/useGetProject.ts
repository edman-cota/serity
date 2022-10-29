/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useAuthState } from "react-firebase-hooks/auth"
import database, { auth } from "../firebase"
import type { RootState } from "../store"

export const useGetProject = () => {
  const [user] = useAuthState(auth)
  const [project, setProject] = useState<any[]>([])
  const workingProject = useSelector(
    (state: RootState) => state.workingProject.value,
  )

  useEffect(() => {
    database.ref(`${user?.uid}/projects`).on("value", (snapshot) => {
      const taskList: any[] = []
      snapshot.forEach((snap) => {
        if (snap.val().id === workingProject.id) {
          taskList.push(snap.val())
        }
      })

      setProject(taskList)
    })
  }, [user?.uid, workingProject.id])

  return { project }
}
