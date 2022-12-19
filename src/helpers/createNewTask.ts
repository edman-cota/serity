import database from '../firebase'
import { Task } from 'src/models/task.model'
import { Project } from '../models/project.model'
import { ActivityType } from '../models/definitions'
import { CreateTaskActivity } from 'src/models/Activity.model'

export function createNewTask(user: any, title: string, project: Project) {
  const workingProjectId = window.localStorage.getItem('working-project')

  const cardRef = database.ref(`${user?.uid}/tasks`)
  const newCardRef = cardRef.push()

  if (newCardRef.key !== null && workingProjectId !== null) {
    const task: Task = {
      id: newCardRef.key,
      content: title,
      completed: 0,
      priority: 0,
      projectId: workingProjectId,
      createdBy: user?.uid,
      createdAt: new Date().toISOString(),
    }

    newCardRef.set(task).then(() => {
      database
        .ref(`${user?.uid}/projects/${workingProjectId}`)
        .update({ activeCount: project.activeCount + 1 })

      database
        .ref(`${user?.uid}/projects/${workingProjectId}`)
        .update({ taskCount: project.taskCount + 1 })

      // Add task to activity database
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()

      if (newActivityRef.key !== null && newCardRef.key !== null) {
        const activity: CreateTaskActivity = {
          id: newActivityRef.key,
          content: title,
          taskId: newCardRef.key,
          username: user?.displayName,
          projectId: workingProjectId,
          createdBy: user?.uid,
          createdAt: new Date().toISOString(),
          type: ActivityType.ADD_TASK_ACTIVITY_TYPE,
        }

        newActivityRef.set(activity)
      }
    })
  }
}
