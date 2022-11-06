import database from '../firebase'
import { Status, DBRef } from '../types/definitions'

export const deleteSingleTask = (task: any, project: any, user: any) => {
  database
    .ref(`${user?.uid}/${DBRef.Tasks}/${task.id}`)
    .remove()
    .then(() => {
      // SUBSTRACT 1 from the total active tasks
      database.ref(`${user?.uid}/${DBRef.Projects}/${task.projectId}`).update({
        activeCount: project.activeCount - 1,
      })

      database.ref(`${user?.uid}/${DBRef.Projects}/${task.projectId}`).update({
        taskCount: project.taskCount - 1,
      })

      return Status.SUCCESS
    })
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
