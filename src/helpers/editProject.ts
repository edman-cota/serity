import database from '../firebase'
import { Status } from '../enums/definitions'

export function editProject(name: string, user: any, emoji: any, id: string) {
  database
    .ref(`${user?.uid}/projects/${id}`)
    .update({ name: name, emoji: emoji })
    .then(() => Status.SUCCESS)
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
