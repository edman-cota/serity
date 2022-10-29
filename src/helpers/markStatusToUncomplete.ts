import { ActivityType } from "../enums/definitions"
import database from "../firebase"

export function markStatusToUncomplete(
  user: any,
  workingProject: any,
  project: any,
  task: any,
) {
  const status = { success: "success", error: "error" }

  database
    .ref(`${user?.uid}/tasks/`)
    .child(task.id)
    .update({ completed: 0, completedAt: null })
    .then(() => {
      // Add 1 from the total of active tasks
      database.ref(`${user?.uid}/projects/${workingProject.id}`).update({
        activeCount: project?.[0].activeCount + 1,
      })

      // Save the current operation activity
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()
      newActivityRef
        .set({
          id: newActivityRef.key,
          username: user?.displayName,
          content: task.content,
          taskId: task.id,
          projectId: workingProject.id,
          createdBy: user?.uid,
          createdAt: new Date().toISOString(),
          type: ActivityType.REOPEN_TASK_ACTIVITY_TYPE,
        })
        .catch(() => status.error)
    })

  return status.success
}
