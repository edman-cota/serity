/* eslint-disable import/prefer-default-export */
import { UPDATE_PRIORITY_ACTIVITY_TYPE } from "../constants";
import database from "../firebase";

export function changeTaskPriority(user, workingProject, task, priority) {
  const status = { success: "success", error: "error" };

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
        type: UPDATE_PRIORITY_ACTIVITY_TYPE,
      });
    })
    .catch(() => status.error);

  return status.success;
}
