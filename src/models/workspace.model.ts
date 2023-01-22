export interface Workspace {
  /**
   * Id of the workspace
   */
  id: string
  /**
   * Name of the workspace
   */
  name: string
  /**
   * The user memebers assigned to this project.
   */
  members: string[]
  /**
   * Current time when the workspace was created at.
   */
  createdAt: string
  /**
   * Current user id who created the workspace.
   */
  createdBy: string
}
