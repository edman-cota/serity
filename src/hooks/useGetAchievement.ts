import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import database, { auth } from '../firebase'
import { Task } from '../models/task.model'

export const useGetAchievement = () => {
  const [user] = useAuthState(auth)
  const [tasks, setTasks] = useState<Task[]>([])
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on('value', (snapshot) => {
      const taskList: Task[] = []
      const completedTask: Task[] = []
      snapshot.forEach((snap) => {
        if (snap.val().completed === 0) {
          taskList.push(snap.val())
        }
        if (snap.val().completed === 1) {
          completedTask.push(snap.val())
        }
      })

      setTasks(taskList)
      setCompletedTasks(completedTask)
    })
  }, [user?.uid])

  return { tasks, completedTasks }
}
