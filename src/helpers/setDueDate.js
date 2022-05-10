/* eslint-disable import/prefer-default-export */
import { CHANGE_DUE_DATE_ACTIVITY_TYPE } from "../constants";
import database from "../firebase";

export function setDueDate(user, task, e, workingProject) {
  const status = { success: "success", error: "error" };

  database
    .ref(`${user?.uid}/tasks/${task?.at(0).id}`)
    .update({ due: new Date(e).toISOString() })
    .then(() => {
      const activityRef = database.ref(`${user?.uid}/activities`);
      const newActivityRef = activityRef.push();
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task?.at(0).content,
        due: new Date(e).toISOString(),
        taskId: task?.at(0).id,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: CHANGE_DUE_DATE_ACTIVITY_TYPE,
      });
    })
    .catch(() => status.error);

  return status.success;
}
