import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAuthState } from 'react-firebase-hooks/auth'

import { RootState } from 'src/store'
import database, { auth } from '../firebase'
import { Project } from '../models/project.model'

type ProjectProps = Omit<Project, 'createdAt' | 'createdBy' | 'id' | 'name'>

export const useGetProject = () => {
  const [user] = useAuthState(auth)
  const [project, setProject] = useState<any[]>([])
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  useEffect(() => {
    database.ref(`${user?.uid}/projects`).on('value', (snapshot) => {
      const taskList: ProjectProps[] = []
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
