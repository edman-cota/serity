import { ActivityType, Status, DBRef } from '../models/definitions'
import database from '../firebase'
import { Project } from '../models/project.model'
import { StatusTaskActivity } from 'src/models/Activity.model'

export function markStatusToCompleted(user: any, workingProject: any, project: Project, task: any) {
  database
    .ref(`${user?.uid}/${DBRef.Tasks}/`)
    .child(task.id)
    .update({ completed: 1, completedAt: new Date().toISOString() })
    .then(() => {
      // SUBSTRACT 1 from the total active tasks
      database.ref(`${user?.uid}/${DBRef.Projects}/${workingProject.id}`).update({
        activeCount: project.activeCount - 1,
      })

      // Save the current operation activity
      const activityRef = database.ref(`${user?.uid}/${DBRef.Activities}`)
      const newActivityRef = activityRef.push()

      if (newActivityRef.key !== null) {
        const Activity: StatusTaskActivity = {
          id: newActivityRef.key,
          username: user?.displayName,
          content: task.content,
          taskId: task.id,
          projectId: workingProject.id,
          createdBy: user?.uid,
          createdAt: new Date().toISOString(),
          type: ActivityType.COMPLETE_TASK_ACTIVITY_TYPE,
        }

        newActivityRef.set(Activity)
      }
    })
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
