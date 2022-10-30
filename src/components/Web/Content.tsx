import React from 'react'
import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import Tree from '../Views/Tree/Tree'

const Content = () => {
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen.value)

  const margin = isSidebarOpen ? '300px' : '0px'

  return (
    <Flex flex={1} ml={margin}>
      <Tree />
    </Flex>
  )
}

export default Content
