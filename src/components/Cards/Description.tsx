import React from 'react'
import { Text } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

import database, { auth } from '../../firebase'
import { ActivityType } from '../../types/definitions'

interface Props {
  description: string | undefined
  title: string | undefined
  id: string | undefined
  projectId: string | undefined
}

const Description = ({ description, title, id, projectId }: Props) => {
  const [user] = useAuthState(auth)

  const handleSubmit = (e: any) => {
    database
      .ref(`${user?.uid}/tasks/${id}`)
      .update({ description: e.trim() })
      .then(() => {
        const activityRef = database.ref(`${user?.uid}/activities`)
        const newActivityRef = activityRef.push()
        newActivityRef.set({
          id: newActivityRef.key,
          username: user?.displayName,
          content: title,
          description: e.trim(),
          taskId: id,
          projectId,
          createdBy: user?.uid,
          createdAt: new Date().toISOString(),
          type: ActivityType.UPDATE_DESCRIPTION_ACTIVITY_TYPE,
        })
      })
  }

  return <Text> {description} </Text>
}

export default Description
