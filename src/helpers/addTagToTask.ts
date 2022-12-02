import database from '../firebase'
import { Status } from '../models/definitions'

export function addTagToTask(user: any, project: any, tag: any, selectedTaskId: string) {
  const tagRef = database.ref(`${user?.uid}/tags`)
  const newTagRef = tagRef.push()
  newTagRef
    .set({
      id: newTagRef.key,
      label: tag.label,
      value: tag.value,
      color: tag.color,
      project: project.id,
      global: true,
      createdAt: new Date().toISOString(),
      createdBy: user?.uid,
    })
    .then(() => {
      // Append the new tag to the task that will belongs to
      const newRef = database.ref(`${user?.uid}/tasks/${selectedTaskId}/tags`)
      newRef.transaction((currentArray) => {
        if (currentArray === null) {
          return { 0: newTagRef.key }
        }
        currentArray.push(newTagRef.key)
        return currentArray
      })
    })
    .catch(() => Status.ERROR)

  // TODO add activity for tag creation
  return Status.SUCCESS
}
