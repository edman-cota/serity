import React from 'react'
import { Flex } from '@chakra-ui/react'

import Sidebar from '@components/Sidebar/Sidebar'
import Tree from '@components/Views/Tree/Tree'
import PanelContent from '@components/Settings/PanelContent'

const Web = (): JSX.Element => {
  return (
    <Flex width='100%' height='100%'>
      <Sidebar />
      <PanelContent>
        <Tree />
      </PanelContent>
    </Flex>
  )
}
export default Web
