import database from '../firebase'
import { Status } from '../enums/definitions'
import { ActivityType } from '../enums/definitions'

export function setDueDate(user: any, task: any, e: any, workingProject: any) {
  database
    .ref(`${user?.uid}/tasks/${task?.id}`)
    .update({ due: new Date(e).toISOString() })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task?.content,
        due: new Date(e).toISOString(),
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
