import React from 'react'
import { Link, Text, useColorModeValue, ListItem } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'
import { NavLink as RouterLink } from 'react-router-dom'

interface PropsInterface {
  to: string
  textId: string
  icon: React.ReactElement
}

const SidebarItem = ({ to, textId, icon }: PropsInterface): JSX.Element => {
  const itemColor = useColorModeValue('#202020', 'hsla(0,0%,100%,.87)')
  const hoverBg = useColorModeValue('white', 'whiteAlpha.200')

  return (
    <ListItem color={itemColor} borderRadius='md' _hover={{ bg: hoverBg }}>
      <Link
        as={RouterLink}
        to={to}
        alignItems='center'
        display='flex'
        h='36px'
        w='100%'
        pl='40px'
        _hover={{ background: hoverBg }}
        _activeLink={{ bg: hoverBg, borderRadius: 'md' }}
      >
        <Text w='30px'>{icon}</Text>
        <Text>
          <FormattedMessage id={textId} />
        </Text>
      </Link>
    </ListItem>
  )
}
export default SidebarItem
