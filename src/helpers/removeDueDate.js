/* eslint-disable import/prefer-default-export */
import { REMOVE_DUE_DATE_ACTIVITY_TYPE } from "../constants";
import database from "../firebase.ts";

export function removeDueDate(user, task, workingProject) {
  const status = { success: "success", error: "error" };

  database
    .ref(`${user?.uid}/tasks/${task.id}`)
    .update({ due: null })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`);
      const newActivityRef = activityRef.push();
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task.content,
        due: null,
        taskId: task.id,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: REMOVE_DUE_DATE_ACTIVITY_TYPE,
      });
    })
    .catch(() => status.error);

  return status.success;
}
