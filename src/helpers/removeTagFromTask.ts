import database from '../firebase'

export function removeTagFromTask(user: any, tag: any, selectedTaskId: string) {
  database.ref(`${user?.uid}/tasks/${selectedTaskId}/tags`).update({})
  // TODO add activity for removing tag
}
