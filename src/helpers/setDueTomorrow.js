/* eslint-disable import/prefer-default-export */
import { CHANGE_DUE_DATE_ACTIVITY_TYPE } from "../constants";
import database from "../firebase";

export function setDueTomorrow(user, task, workingProject) {
  const status = { success: "success", error: "error" };
  const now = new Date();
  const tomorrow = new Date(now.setDate(now.getDate() + 1)).toString();

  database
    .ref(`${user?.uid}/tasks/${task.id}`)
    .update({ due: new Date(tomorrow).toISOString() })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`);
      const newActivityRef = activityRef.push();
      newActivityRef
        .set({
          id: newActivityRef.key,
          username: user?.displayName,
          content: task.content,
          due: new Date(tomorrow).toISOString(),
          taskId: task.id,
          projectId: workingProject.id,
          createdBy: user?.uid,
          createdAt: new Date().toISOString(),
          type: CHANGE_DUE_DATE_ACTIVITY_TYPE,
        })
        .catch(() => status.error);
    })
    .catch(() => status.error);

  return status.success;
}
