import database from '../firebase'
import { ADD_TASK_ACTIVITY_TYPE } from '../constants'
import { Project } from '../types/project.model'

export function createNewTask(user: any, title: string, project: Project) {
  const workingProjectId = window.localStorage.getItem('working-project')

  const cardRef = database.ref(`${user?.uid}/tasks`)
  const newCardRef = cardRef.push()
  newCardRef
    .set({
      id: newCardRef.key,
      content: title,
      completed: 0,
      priority: 0,
      projectId: workingProjectId,
      createdBy: user?.uid,
      createdAt: new Date().toISOString(),
    })
    .then(() => {
      database
        .ref(`${user?.uid}/projects/${workingProjectId}`)
        .update({ activeCount: project.activeCount + 1 })

      database
        .ref(`${user?.uid}/projects/${workingProjectId}`)
        .update({ taskCount: project.taskCount + 1 })

      // Add task to activity database
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()
      newActivityRef.set({
        id: newActivityRef.key,
        content: title,
        taskId: newCardRef.key,
        username: user?.displayName,
        projectId: workingProjectId,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: ADD_TASK_ACTIVITY_TYPE,
      })
    })
}
