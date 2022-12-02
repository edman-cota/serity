import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import database, { auth } from '../firebase'
import { Tag } from '../models/tag.modal'

export const useGetTaskTags = () => {
  const [user] = useAuthState(auth)
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    database.ref(`${user?.uid}/tags`).on('value', (snapshot) => {
      const tagsList: Tag[] = []
      snapshot.forEach((snap) => {
        tagsList.push(snap.val())
      })
      setTags(tagsList)
    })
  }, [user?.uid])

  return { tags }
}
