import React from 'react'
import { Flex } from '@chakra-ui/react'

import MainPanel from './MainPanel'
import DetailPanel from './DetailPanel'

const Tree = () => {
  return (
    <Flex w='100%'>
      <MainPanel />
      <DetailPanel />
    </Flex>
  )
}

export default Tree
