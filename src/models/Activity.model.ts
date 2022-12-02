import { PriorityType, ActivityType } from './definitions'

export interface Activity {
  /**
   * Id of the activity.
   */
  id: string
  /**
   * Due date of the activity. Depends on the activity type.
   */
  due: string
  /**
   * The actual task content where the activity belongs to.
   */
  content: string
  /**
   * The task id where the activity belings to.
   */
  taskId: string
  /**
   * Current user username that triggered the activity.
   */
  username: string
  /**
   * Current time when the activity was created at.
   */
  createdAt: string
  /**
   * Current user id who triggered the activity.
   */
  createdBy: string
  /**
   * The project id where the task belongs to where the activity was created at.
   */
  projectId: string
  /**
   * The type of the activity.
   */
  type: ActivityType
  /**
   * The actual task description where the activity belongs to.
   */
  description: string
  /**
   * The actual task priority where the activity belings to.
   */
  priority: PriorityType
}
