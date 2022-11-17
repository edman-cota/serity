import React from 'react'
import { useSelector } from 'react-redux'
import { Slide, useColorModeValue, VStack } from '@chakra-ui/react'

import { RootState } from 'src/store'
import Workspace from '../Workspace/Workspace'

const Sidebar = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.isSidebarOpen.value)

  const sidebarBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Slide
      in={isSidebarOpen}
      unmountOnExit
      position='static'
      direction='left'
      style={{ width: '300px' }}
    >
      <VStack w='300px' h='100vh' pos='fixed' background={sidebarBackground}>
        <Workspace />
      </VStack>
    </Slide>
  )
}

export default Sidebar
