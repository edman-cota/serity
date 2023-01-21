import database from '../firebase'
import { Status } from '../models/definitions'

export function updateProjectEmoji(emoji: string, user: any, id: string) {
  database
    .ref(`${user?.uid}/projects/${id}`)
    .update({ emoji: emoji })
    .then(() => Status.SUCCESS)
    .catch(() => Status.ERROR)

  return Status.SUCCESS
}
