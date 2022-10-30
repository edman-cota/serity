import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import database, { auth } from '../firebase'
import { TaskProps } from '../types/task.model'

export const useGetAllCompletedTasks = () => {
  const [user] = useAuthState(auth)
  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([])

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on('value', (snapshot) => {
      const taskList: TaskProps[] = []
      snapshot.forEach((snap) => {
        if (snap.val().completed === 1) {
          taskList.push(snap.val())
        }
      })

      setCompletedTasks(taskList)
    })
  }, [user?.uid])

  return { completedTasks }
}
