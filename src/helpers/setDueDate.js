/* eslint-disable import/prefer-default-export */
import { CHANGE_DUE_DATE_ACTIVITY_TYPE } from "../constants/index.ts";
import database from "../firebase.ts";

export function setDueDate(user, task, e, workingProject) {
  const status = { success: "success", error: "error" };

  database
    .ref(`${user?.uid}/tasks/${task?.id}`)
    .update({ due: new Date(e).toISOString() })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`);
      const newActivityRef = activityRef.push();
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task?.content,
        due: new Date(e).toISOString(),
        taskId: task?.id,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: CHANGE_DUE_DATE_ACTIVITY_TYPE,
      });
    })
    .catch(() => status.error);

  return status.success;
}
