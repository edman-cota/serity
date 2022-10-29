import { ActivityType, Status, DBRef } from "../enums/definitions"
import database from "../firebase"

export function markStatusToCompleted(
  user: any,
  workingProject: any,
  project: any,
  task: any,
) {
  database
    .ref(`${user?.uid}/${DBRef.Tasks}/`)
    .child(task.id)
    .update({ completed: 1, completedAt: new Date().toISOString() })
    .then(() => {
      // SUBSTRACT 1 from the total active tasks
      database
        .ref(`${user?.uid}/${DBRef.Projects}/${workingProject.id}`)
        .update({
          activeCount: project?.[0].activeCount - 1,
        })

      // Save the current operation activity
      const activityRef = database.ref(`${user?.uid}/${DBRef.Activities}`)
      const newActivityRef = activityRef.push()
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task.content,
        taskId: task.id,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: ActivityType.COMPLETE_TASK_ACTIVITY_TYPE,
      })
    })
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
