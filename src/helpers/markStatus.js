/* eslint-disable no-unsafe-optional-chaining */
import { COMPLETE_TASK_ACTIVITY_TYPE } from "../constants";
import database from "../firebase";

// eslint-disable-next-line import/prefer-default-export
export function markStatus(user, workingProject, project, task) {
  const status = { success: "success", error: "error" };

  database
    .ref(`${user?.uid}/tasks/`)
    .child(task.id)
    .update({ completed: 1, completedAt: new Date().toISOString() })
    .then(() => {
      // SUBSTRACT 1 from the total active tasks
      database.ref(`${user?.uid}/projects/${workingProject.id}`).update({
        activeCount: project?.[0].activeCount - 1,
      });

      // Save the current operation activity
      const activityRef = database.ref(`${user?.uid}/activities`);
      const newActivityRef = activityRef.push();
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task.content,
        taskId: task.id,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: COMPLETE_TASK_ACTIVITY_TYPE,
      });
    })
    .catch(() => status.error);

  return status.success;
}
