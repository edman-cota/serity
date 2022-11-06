import { ActivityType, Status } from '../types/definitions'
import database from '../firebase'
import { Task } from 'src/types/task.model'
import { ProjectBTO } from 'src/types/project.model'

export function setDueToday(user: any, task: Task, workingProject: ProjectBTO) {
  database
    .ref(`${user?.uid}/tasks/${task.id}`)
    .update({ due: new Date().toISOString() })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`)
      const newActivityRef = activityRef.push()
      newActivityRef
        .set({
          id: newActivityRef.key,
          username: user?.displayName,
          content: task.content,
          due: new Date().toISOString(),
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
