import database from '../firebase'
import { ActivityType } from '../models/definitions'

export const updateTaskContentActivity = (
  user: any,
  id: string,
  projectId: string,
  content: string,
) => {
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
}
