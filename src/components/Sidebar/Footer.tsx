import { Button, HStack, useColorModeValue } from '@chakra-ui/react'
import { Tooltip } from '@serity-ui/react'
import CreateProject from '../Modals/CreateProject'
import SettingsMenu from '../Menus/UserAvatarMenu'
import { IoNotificationsOutline } from 'react-icons/io5'
import { FormattedMessage } from 'react-intl'
import NotificationsButton from '@components/Navbar/NotificationsButton'

const Footer = (): JSX.Element => {
  const borderTopColor = useColorModeValue('gray.300', 'gray.500')

  return (
    <HStack
      w='90%'
      mx='auto'
      h='80px'
      justifyContent='space-between'
      borderTop='1px'
      borderColor={borderTopColor}
    >
      <CreateProject />

      <NotificationsButton />

      <SettingsMenu />
    </HStack>
  )
}

export default Footer
