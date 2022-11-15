import { Flex } from '@chakra-ui/react'
import { HotKeys } from 'react-hotkeys'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'src/store'
import DetailPanel from './DetailPanel'
import { Outlet } from 'react-router-dom'
import { setSidebarVisibility } from '@features/counter/sidebarVisibilitySlice'
import React from 'react'

const Tree = () => {
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state: RootState) => state.isSidebarOpen.value)

  const keyMap = {
    DELETE_NODE: 'Ctrl+b',
  }

  const handlers = {
    DELETE_NODE: () => {
      dispatch(setSidebarVisibility(!isSidebarOpen))
    },
  }

  return (
    <HotKeys
      keyMap={keyMap}
      handlers={handlers}
      allowChanges
      style={{
        height: '100vh',
        display: 'flex',
        width: '100%',
      }}
    >
      <Flex w='100%'>
        <Outlet />
        <DetailPanel />
      </Flex>
    </HotKeys>
  )
}

export default Tree
