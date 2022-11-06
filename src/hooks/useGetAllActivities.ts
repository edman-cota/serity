import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { RootState } from 'src/store'
import database, { auth } from '../firebase'
import { Activity } from '../types/activity.model'

const useGetActivities = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [user] = useAuthState(auth)
  const [isLoading, setIsLoading] = useState(true)
  const task = useSelector((state: RootState) => state.task.value)

  useEffect(() => {
    database.ref(`${user?.uid}/activities`).on('value', (snapshot) => {
      setIsLoading(true)
      const currentList: Activity[] = []
      snapshot.forEach((snap) => {
        if (snap.val().taskId === task.id) {
          currentList.push(snap.val())
        }
      })

      setActivities(currentList)
      setIsLoading(false)
    })
  }, [user?.uid, task.id])

  return { activities, isLoading }
}

export default useGetActivities
