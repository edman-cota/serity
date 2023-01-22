import { Avatar } from '@chakra-ui/react'
import { User } from '../../models/user.modal'
import React from 'react'
import avatar from '../../assets/img/avatar.png'

interface UserAvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user }: UserAvatarProps) {
  return (
    <>
      {user.image === undefined || user.image === null ? (
        <Avatar name='Edman' w='30px' h='30px' cursor='pointer' src={avatar} />
      ) : (
        <Avatar name='Edman' w='30px' h='30px' cursor='pointer' src={user.image} />
      )}
    </>
  )
}
