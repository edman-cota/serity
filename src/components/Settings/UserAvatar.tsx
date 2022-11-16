import { Avatar } from '@chakra-ui/react'
import { User } from '../../types/user.modal'

interface UserAvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user }: UserAvatarProps) {
  return <Avatar w='100px' h='100px' cursor='pointer' src={user.image} />
}
