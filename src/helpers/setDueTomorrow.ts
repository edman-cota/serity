import { ActivityType, Status } from '../types/definitions'
import database from '../firebase'

export function setDueTomorrow(user: any, task: any, workingProject: any) {
  const now = new Date()
  const tomorrow = new Date(now.setDate(now.getDate() + 1)).toString()

  database
    .ref(`${user?.uid}/tasks/${task.id}`)
    .update({ due: new Date(tomorrow).toISOString() })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()
      newActivityRef
        .set({
          id: newActivityRef.key,
          username: user?.displayName,
          content: task.content,
          due: new Date(tomorrow).toISOString(),
          taskId: task.id,
          projectId: workingProject.id,
          createdBy: user?.uid,
          createdAt: new Date().toISOString(),
          type: ActivityType.CHANGE_DUE_DATE_ACTIVITY_TYPE,
        })
        .catch(() => Status.ERROR)
    })
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
