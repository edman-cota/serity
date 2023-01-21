import database from '../firebase'
import { ActivityType, Status, DBRef } from '../models/definitions'

export function updateTaskContent(user: any, id: string, projectId: string, content: string) {
  database
    .ref(`${user?.uid}/tasks/${id}`)
    .update({ content: content })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: content,
        taskId: id,
        projectId,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: ActivityType.RENAME_TASK_ACTIVITY_TYPE,
      })
    })
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
