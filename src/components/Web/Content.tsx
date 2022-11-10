import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import Tree from '../Views/Tree/Tree'
import { RootState } from 'src/store'

const Content = () => {
  const isSidebarOpen = useSelector((state: RootState) => state.isSidebarOpen.value)

  const margin = isSidebarOpen ? '300px' : '0px'
  return (
    <Flex flex={1} ml={margin}>
      <Tree />
    </Flex>
  )
}

export default Content
