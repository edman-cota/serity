import database from "../firebase";
import { ActivityType, Status } from "../enums/definitions";

export function changeTaskPriority(
  user: any,
  workingProject: any,
  task: any,
  priority: any
) {
  database
    .ref(`${user?.uid}/tasks/${task.at(0).id}`)
    .update({ priority })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`);
      const newActivityRef = activityRef.push();
      newActivityRef.set({
        id: newActivityRef.key,
        createdBy: user?.uid,
        taskId: task.at(0).id,
        priority,
        username: user?.displayName,
        projectId: workingProject.id,
        content: task.at(0).content,
        createdAt: new Date().toISOString(),
        type: ActivityType.UPDATE_PRIORITY_ACTIVITY_TYPE,
      });
    })
    .catch(() => Status.ERROR);

  return Status.SUCCESS;
}
