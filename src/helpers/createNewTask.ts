import database from '../firebase'
import { Project } from '../models/project.model'
import { ActivityType } from '../models/definitions'

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
        type: ActivityType.ADD_TASK_ACTIVITY_TYPE,
      })
    })
}
