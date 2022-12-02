import { Avatar } from '@chakra-ui/react'
import { User } from '../../models/user.modal'

interface UserAvatarProps {
  user: Pick<User, 'image' | 'name'>
}

export function UserAvatar({ user }: UserAvatarProps) {
  return <Avatar w='90px' h='90px' cursor='pointer' src={user.image} />
}
