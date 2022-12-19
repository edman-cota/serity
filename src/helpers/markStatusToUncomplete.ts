import { StatusTaskActivity } from 'src/models/Activity.model'
import database from '../firebase'
import { ActivityType, Status } from '../models/definitions'
import { Project, ProjectBTO } from '../models/project.model'

export function markStatusToUncomplete(
  user: any,
  workingProject: ProjectBTO,
  project: Project,
  task: any,
) {
  database
    .ref(`${user?.uid}/tasks/`)
    .child(task.id)
    .update({ completed: 0, completedAt: null })
    .then(() => {
      // Add 1 from the total of active tasks
      database.ref(`${user?.uid}/projects/${workingProject.id}`).update({
        activeCount: project.activeCount + 1,
      })

      // Save the current operation activity
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()

      if (newActivityRef.key !== null && workingProject.id !== undefined) {
        const Activity: StatusTaskActivity = {
          id: newActivityRef.key,
          username: user?.displayName,
          content: task.content,
          taskId: task.id,
          projectId: workingProject.id,
          createdBy: user?.uid,
          createdAt: new Date().toISOString(),
          type: ActivityType.REOPEN_TASK_ACTIVITY_TYPE,
        }

        newActivityRef.set(Activity).catch(() => Status.ERROR)
      }
    })

  return Status.SUCCESS
}
