import { Workspace } from 'src/models/workspace.model'
import database from '../firebase'
import { Status } from '../models/definitions'

export const createNewWorkspace = (user: any, name: string) => {
  const workspaceRef = database.ref(`${user?.uid}/workspaces`)
  const newWorkspaceRef = workspaceRef.push()

  if (newWorkspaceRef.key !== null && user?.uid !== undefined) {
    const workspace: Workspace = {
      id: newWorkspaceRef.key,
      name: name,
      members: [],
      createdAt: new Date().getTime().toString(),
      createdBy: user?.uid,
    }

    newWorkspaceRef
      .set(workspace)
      .then(() => {
        return Status.SUCCESS
      })
      .catch(() => Status.ERROR)

    return Status.SUCCESS
  }
}
