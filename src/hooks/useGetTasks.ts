/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useSelector } from "react-redux"
import database, { auth } from "../firebase"
import type { RootState } from "../store"
import { TaskProps } from "../types/task.model"

export const useGetTasks = () => {
  const [user] = useAuthState(auth)
  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([])
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const orderBy = useSelector((state: RootState) => state.orderBy.value)
  const workingProject = useSelector(
    (state: RootState) => state.workingProject.value,
  )

  useEffect(() => {
    database
      .ref(`${user?.uid}/tasks`)
      .orderByChild(orderBy)
      .on("value", (snapshot) => {
        setIsLoading(true)
        const taskList: TaskProps[] = []
        const completedTask: TaskProps[] = []
        snapshot.forEach((snap) => {
          if (
            snap.val().projectId ===
            window.localStorage.getItem("working-project")
          ) {
            if (snap.val().completed === 0) {
              taskList.push(snap.val())
            }
            if (snap.val().completed === 1) {
              completedTask.push(snap.val())
            }
          }
        })

        // setCompletedTasks(completedTask);
        // setCompletedTasks(
        //   completedTask.sort(
        //     (a, b) =>
        //       new Date(b.completedAt).getTime() -
        //       new Date(a.completedAt).getTime()
        //   )
        // );
        setTasks(taskList)
        setCompletedTasks(completedTask)
        setIsLoading(false)
      })
  }, [user?.uid, workingProject.id, orderBy, isLoading])

  return { tasks, completedTasks, isLoading }
}
