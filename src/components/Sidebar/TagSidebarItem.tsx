import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Text, useColorModeValue, ListItem } from '@chakra-ui/react'

import { auth } from '../../firebase'
import { Tag } from 'src/types/tag.modal'
import { formatUrl } from '@helpers/formatter'
import { formatUsername } from '@helpers/formatter'

interface Props {
  tag: Tag
}

const TagSidebarItem = ({ tag }: Props) => {
  const [user] = useAuthState(auth)
  const itemColor = useColorModeValue('#202020', 'hsla(0,0%,100%,.87)')
  const hoverBg = useColorModeValue('white', 'whiteAlpha.200')
  const username = formatUsername(user?.email)

  return (
    <ListItem key={tag.id} color={itemColor} borderRadius='md' _hover={{ bg: hoverBg }}>
      <Link
        as={RouterLink}
        key={tag.id}
        display='flex'
        alignItems='center'
        pl='10px'
        textDecoration='none'
        style={{ textDecoration: 'none' }}
        to={`/${username}/${formatUrl(tag?.label)}`}
        _activeLink={{ bg: hoverBg, borderRadius: 'md' }}
      >
        <Text w='15px' h='13px' mx='10px' bg={tag?.color} borderRadius='full'></Text>
        <Text w='100%' h='36px' display='flex' alignItems='center' fontSize='15px' px='10px'>
          {tag?.label}
        </Text>
      </Link>
    </ListItem>
  )
}

export default TagSidebarItem
