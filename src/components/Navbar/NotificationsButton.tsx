import { Button } from '@chakra-ui/react'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { IoNotificationsOutline } from 'react-icons/io5'

const NotificationsButton = () => (
  <Tooltip label={<FormattedMessage id='notifications' />}>
    <Button>
      <IoNotificationsOutline />
    </Button>
  </Tooltip>
)

export default NotificationsButton
