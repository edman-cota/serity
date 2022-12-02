import database from '../firebase'
import { Status } from '../models/definitions'

export function createNewTag(user: any, tag: any, color: string) {
  const tagRef = database.ref(`${user?.uid}/tags`)
  const newTagRef = tagRef.push()
  newTagRef
    .set({
      id: newTagRef.key,
      label: tag,
      value: tag.toLowerCase(),
      color: color,
      project: '',
      global: true,
      createdAt: new Date().toISOString(),
      createdBy: user?.uid,
    })
    .then(() => Status.SUCCESS)
    .catch(() => Status.ERROR)
  return Status.SUCCESS
}
