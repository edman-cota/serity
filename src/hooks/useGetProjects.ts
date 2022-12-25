import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import database, { auth } from '../firebase'
import { Project } from '../models/project.model'

export const useGetProjects = () => {
  const [user] = useAuthState(auth)
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    database.ref(`${user?.uid}/projects`).on('value', (snapshot) => {
      setIsLoading(true)
      const currentList: Project[] = []

      snapshot.forEach((snap) => {
        currentList.push(snap.val())
      })

      setProjects(currentList)
      setIsLoading(false)
    })
  }, [user?.uid, isLoading])

  return { projects, isLoading }
}
