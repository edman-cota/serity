import { Textarea } from "@chakra-ui/react"
import { useAuthState } from "react-firebase-hooks/auth"
import { ActivityType } from "../../enums/definitions"
import database, { auth } from "../../firebase"

interface Props {
  content: string
  id: string | undefined
  projectId: string | undefined
}

const InputTaskTitle = ({ content, id, projectId }: Props) => {
  const [user] = useAuthState(auth)

  const handleKeyDown = (e: any) => {
    const keyCode = e.which || e.keyCode

    if (keyCode === 13) {
      e.preventDefault()

      database
        .ref(`${user?.uid}/tasks/${id}`)
        .update({ content: e })
        .then(() => {
          const activityRef = database.ref(`${user?.uid}/activities`)
          const newActivityRef = activityRef.push()
          newActivityRef.set({
            id: newActivityRef.key,
            username: user?.displayName,
            content: e,
            taskId: id,
            projectId,
            createdBy: user?.uid,
            createdAt: new Date().toISOString(),
            type: ActivityType.RENAME_TASK_ACTIVITY_TYPE,
          })
        })
    }
  }

  return (
    <Textarea
      value={content}
      placeholder="Content should not be empty"
      fontSize="18px"
      px="4px"
      border="none"
      fontWeight={600}
      onKeyDown={handleKeyDown}
    />
  )
}

export default InputTaskTitle
