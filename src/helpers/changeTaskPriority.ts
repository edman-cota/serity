import database from "../firebase";
import { ActivityType, Status, DBRef } from "../enums/definitions";
import { Task } from "../types/task.model";

export function changeTaskPriority(
  user: any,
  workingProject: any,
  task: Task,
  priority: number
) {
  database
    .ref(`${user?.uid}/${DBRef.Tasks}/${task.id}`)
    .update({ priority })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/${DBRef.Activities}`);
      const newActivityRef = activityRef.push();
      newActivityRef.set({
        id: newActivityRef.key,
        createdBy: user?.uid,
        taskId: task.id,
        priority,
        username: user?.displayName,
        projectId: workingProject.id,
        content: task.content,
        createdAt: new Date().toISOString(),
        type: ActivityType.UPDATE_PRIORITY_ACTIVITY_TYPE,
      });
    })
    .catch(() => Status.ERROR);

  return Status.SUCCESS;
}
