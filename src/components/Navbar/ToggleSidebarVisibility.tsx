import { Button } from '@chakra-ui/react'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { BsLayoutSidebar } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'src/store'
import { setSidebarVisibility } from '@features/counter/sidebarVisibilitySlice'

const ToggleSidebarVisibility = () => {
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state: RootState) => state.isSidebarOpen.value)

  const toggleSidebarVisibility = () => {
    dispatch(setSidebarVisibility(!isSidebarOpen))
  }

  return (
    <Tooltip
      label={<FormattedMessage id='toggle_sidebar' />}
      command='Ctrl + B'
      commandBg='rgba(255, 255, 255, .2)'
    >
      <Button onClick={toggleSidebarVisibility}>
        <BsLayoutSidebar size={16} />
      </Button>
    </Tooltip>
  )
}

export default ToggleSidebarVisibility
