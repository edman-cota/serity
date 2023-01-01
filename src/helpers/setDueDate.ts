import database from '../firebase'
import { Status } from '../models/definitions'
import { ActivityType } from '../models/definitions'

export function setDueDate(user: any, task: any, date: string | Date, workingProject: any) {
  database
    .ref(`${user?.uid}/tasks/${task?.id}`)
    .update({ due: new Date(date).toISOString() })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task?.content,
        due: new Date(date).toISOString(),
        taskId: task?.id,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: ActivityType.CHANGE_DUE_DATE_ACTIVITY_TYPE,
      })
    })
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
