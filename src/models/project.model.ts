export interface Project {
  /**
   * The total of all active tasks (not completed yet).
   */
  activeCount: number
  /**
   * The colors that represent the project.
   * This property applies in Kanban view.
   */
  color?: string
  /**
   * The order on which the project will be display.
   * This property applies in Kanban view.
   */
  columnsOrder?: string[]
  /**
   * Current time when the project was created at.
   */
  createdAt: string
  /**
   * Current user id who created the project.
   */
  createdBy: string
  /**
   * An emoji that identifies the project.
   */
  emoji?: string
  /**
   * Id of the project.
   */
  id: string
  /**
   * String name of the project.
   */
  name: string
  /**
   * If the project is shared with other members.
   */
  shared?: boolean
  /**
   * Show completed tasks.
   */
  showCompleted?: boolean
  /**
   * The total number of all tasks created in this project.
   */
  taskCount: number
  /**
   * The user memebers assigned to this project.
   */
  members?: string[]
  /**
   * This applies to the Board view.
   * The list of columns created in this project.
   */
  columns?: []
}

export interface ProjectBTO extends Partial<Project> {}
