import database from '../firebase'
import { Status } from '../types/definitions'

export function transferTask(
  user: any,
  task: any,
  project: any,
  newId: string,
  newActive: number,
  newCount: number,
) {
  database
    .ref(`${user?.uid}/tasks/${task?.id}`)
    .update({ projectId: newId })
    .then(() => {
      // subsctract 1 from the project the task is being transferred from
      database
        .ref(`${user?.uid}/projects/${project.id}`)
        .update({ activeCount: project.activeCount - 1 })

      database
        .ref(`${user?.uid}/projects/${project.id}`)
        .update({ taskCount: project.taskCount - 1 })

      // Add 1 to the project the task is being transferred to
      database.ref(`${user?.uid}/projects/${newId}`).update({ activeCount: Number(newActive) + 1 })

      database.ref(`${user?.uid}/projects/${newId}`).update({ taskCount: Number(newCount) + 1 })
    })
    .catch(() => Status.ERROR)
  return Status.SUCCESS
}
