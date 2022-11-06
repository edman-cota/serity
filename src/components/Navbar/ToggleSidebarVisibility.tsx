import { Button } from '@chakra-ui/react'
import { Tooltip } from '@serity-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { BsLayoutSidebarReverse, BsLayoutSidebar } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'

import { setSidebarVisibility } from '../../features/counter/sidebarVisibilitySlice'
import type { RootState } from '../../store'

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
        {/* {isSidebarOpen ? <BsLayoutSidebarReverse size={18} /> : <BsLayoutSidebar size={18} />} */}
        <BsLayoutSidebar size={18} />
      </Button>
    </Tooltip>
  )
}

export default ToggleSidebarVisibility
