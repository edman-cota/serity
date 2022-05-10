/* eslint-disable import/prefer-default-export */
import { REMOVE_DUE_DATE_ACTIVITY_TYPE } from "../constants";
import database from "../firebase";

export function removeDueDate(user, task, workingProject) {
  const status = { success: "success", error: "error" };

  database
    .ref(`${user?.uid}/tasks/${task?.at(0).id}`)
    .update({ due: null })
    .then(() => {
      // setValue(null);
      //   onClose();
      const activityRef = database.ref(`${user?.uid}/activities`);
      const newActivityRef = activityRef.push();
      newActivityRef.set({
        id: newActivityRef.key,
        username: user?.displayName,
        content: task?.at(0).content,
        due: null,
        taskId: task?.at(0).id,
        projectId: workingProject.id,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: REMOVE_DUE_DATE_ACTIVITY_TYPE,
      });
    })
    .catch(() => status.error);

  return status.success;
}
