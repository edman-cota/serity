export interface Task {
  /**
   * Id of the task.
   */
  id: string
  /**
   * Due date of the task if provided.
   */
  due?: string
  /**
   * The actual task content.
   */
  content: string
  /**
   * The status of the task in `number` format.
   */
  completed: number
  /**
   * The actual time when the task was created at.
   */
  createdAt: string
  /**
   * The user who created the task.
   */
  createdBy: string
  /**
   * The priority of the task.
   */
  priority: number
  /**
   * The id of the project where the task belongs to.
   */
  projectId: string
  /**
   * A description of the task.
   */
  description?: string
}
