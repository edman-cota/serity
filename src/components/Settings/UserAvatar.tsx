import { Avatar } from '@chakra-ui/react'
import { User } from '../../types/user.modal'

interface UserAvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user }: UserAvatarProps) {
  return <Avatar w='120px' h='120px' cursor='pointer' src={user.image} />
}
