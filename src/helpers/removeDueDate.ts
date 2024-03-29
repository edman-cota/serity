import database from '../firebase'
import { ActivityType, Status } from '../models/definitions'

export function removeDueDate(user: any, task: any, workingProject: any) {
  database
    .ref(`${user?.uid}/tasks/${task.id}`)
    .update({ due: null })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task.content,
        due: null,
        taskId: task.id,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: ActivityType.REMOVE_DUE_DATE_ACTIVITY_TYPE,
      })
    })
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
