import database from '../firebase'
import { Status } from '../types/definitions'

export function transferTask(user: any, task: any, projectId: string) {
  database
    .ref(`${user?.uid}/tasks/${task?.id}`)
    .update({ projectId: projectId })
    .then(() => Status.SUCCESS)
    .catch(() => Status.ERROR)
  return Status.SUCCESS
}
