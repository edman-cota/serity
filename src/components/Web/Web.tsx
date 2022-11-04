import React from 'react'
import { Flex } from '@chakra-ui/react'

import Content from './Content'
import Sidebar from '../Sidebar/Sidebar'

const Web = (): JSX.Element => {
  return (
    <Flex width='100%' height='100%'>
      <Sidebar />
      <Content />
    </Flex>
  )
}
export default Web
