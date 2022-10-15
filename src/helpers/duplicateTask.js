/* eslint-disable import/prefer-default-export */
import { ADD_TASK_ACTIVITY_TYPE } from "../constants";
import database from "../firebase.ts";

export function duplicateTask(task, project, user) {
  const status = { success: "success", error: "error" };

  const cardRef = database.ref(`${user?.uid}/tasks`);
  const newCardRef = cardRef.push();
  newCardRef
    .set({
      id: newCardRef.key,
      content: task.content,
      completed: task.completed,
      priority: task.priority,
      description: task.description || null,
      due: task.due || null,
      projectId: task.projectId,
      createdBy: task.createdBy,
      createdAt: new Date().toISOString(),
    })
    .then(() => {
      database
        .ref(`${user?.uid}/projects/${task.projectId}`)
        .update({ activeCount: project.activeCount + 1 });

      database
        .ref(`${user?.uid}/projects/${task.projectId}`)
        .update({ taskCount: project.taskCount + 1 });

      // Add task to activity database
      const activityRef = database.ref(`${user?.uid}/activities`);
      const newActivityRef = activityRef.push();
      newActivityRef.set({
        id: newActivityRef.key,
        content: task.content,
        taskId: newCardRef.key,
        username: user?.displayName,
        projectId: task.projectId,
        createdBy: user?.uid,
        createdAt: new Date().toISOString(),
        type: ADD_TASK_ACTIVITY_TYPE,
      });
    })
    .catch(() => status.error);

  return status.success;
}
