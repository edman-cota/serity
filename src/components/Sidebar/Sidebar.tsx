import React from 'react'
import { useSelector } from 'react-redux'
import { Slide, useColorModeValue, VStack } from '@chakra-ui/react'

import { RootState } from 'src/store'

interface Props {
  children: React.ReactNode
}

const Sidebar = ({ children }: Props) => {
  const sidebarBackground = useColorModeValue('gray.100', 'gray.700')
  const isSidebarOpen = useSelector((state: RootState) => state.isSidebarOpen.value)

  return (
    <Slide in={isSidebarOpen} unmountOnExit direction='left' style={{ width: '300px' }}>
      <VStack w='300px' h='100vh' pos='fixed' pt='50px' background={sidebarBackground}>
        {children}
      </VStack>
    </Slide>
  )
}

export default Sidebar
