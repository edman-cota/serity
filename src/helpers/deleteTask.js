/* eslint-disable import/prefer-default-export */
import database from "../firebase.ts";

export function deleteTask(task, project, user) {
  const status = { success: "success", error: "error" };

  database
    .ref(`${user?.uid}/tasks/${task.id}`)
    .remove()
    .then(() => {
      // SUBSTRACT 1 from the total active tasks
      database.ref(`${user?.uid}/projects/${task.projectId}`).update({
        activeCount: project.activeCount - 1,
      });

      database.ref(`${user?.uid}/projects/${task.projectId}`).update({
        taskCount: project.taskCount - 1,
      });

      return status.success;
    })
    .catch(() => status.error);

  return status.success;
}
