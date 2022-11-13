import database from '../firebase'

export function deleteSingleTag(user: any, tag: any) {
  database.ref(`${user?.uid}/tags/${tag.id}`).remove()

  // TODO add activity for removing tag
}
