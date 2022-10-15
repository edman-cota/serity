import { PriorityType, ActivityType } from "../enums/definitions";

export type Activity = {
  /**
   * Unic Id of the activity
   */
  id?: string;
  /**
   * Optional due date of the activity. Depends on the activity type
   */
  due: string;
  /**
   * The actual task content/title
   */
  content: string;
  /**
   * The task id where the activity was created at
   */
  taskId?: string;
  /**
   * The actual user username that triggered the activity
   */
  username: string;
  /**
   * Current time when the activity was created at
   */
  createdAt: string;
  /**
   * The project id where the task belongs to where the activity was created at
   */
  projectId?: string;
  /**
   * The type of the activity
   */
  type: ActivityType;
  /**
   * The actual task description where the activity belongs to
   */
  description: string;
  /**
   * The actual task priority where the activity belings to
   */
  priority: PriorityType;
};
