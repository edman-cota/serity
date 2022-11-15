import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { RootState } from 'src/store'
import database, { auth } from '../firebase'
import { Task } from 'src/types/task.model'

export const useGetTask = () => {
  const [user] = useAuthState(auth)
  const [task, setTask] = useState<Task[]>([])
  const selectedTaskId = useSelector((state: RootState) => state.selectedTaskId.value)

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on('value', (snapshot) => {
      const taskList: Task[] = []
      snapshot.forEach((snap) => {
        if (snap.val().completed === 0) {
          if (snap.val().id === selectedTaskId) {
            taskList.push(snap.val())
          }
        }
      })

      setTask(taskList)
    })
  }, [user?.uid, selectedTaskId])

  return { task }
}
