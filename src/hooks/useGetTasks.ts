import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'

import { RootState } from 'src/store'
import { Task } from '../models/task.model'
import database, { auth } from '../firebase'
import { isToday } from '@helpers/isToday'
import { sortTasks } from '@helpers/sortTasks'

export const useGetTasks = () => {
  const [user] = useAuthState(auth)
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const orderBy = useSelector((state: RootState) => state.orderBy.value)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  useEffect(() => {
    database.ref(`${user?.uid}/tasks`).on('value', (snapshot) => {
      setIsLoading(true)
      const taskList: Task[] = []
      const completedTask: Task[] = []
      snapshot.forEach((snap) => {
        if (snap.val().projectId === window.localStorage.getItem('working-project')) {
          if (snap.val().completed === 0) {
            taskList.push(snap.val())
          }

          if (snap.val().completed === 1) {
            if (isToday(snap.val().completedAt)) {
              taskList.push(snap.val())
            }
          }
        }
      })
      setTasks(taskList)
      setCompletedTasks(completedTask)
      setIsLoading(false)
    })
  }, [user?.uid, workingProject.id, orderBy, isLoading])

  // if (orderBy) {
  //   if (orderBy === 'a_to_z') {
  //     setTasks([...sortTasks(tasks, false)])
  //   }
  // }

  // console.log('Sorted data: ', sortTasks(tasks, false))

  return { tasks, completedTasks, isLoading }
}
