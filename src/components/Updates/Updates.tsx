import { Flex } from '@chakra-ui/react'
import Content from './Content'
import Sidebar from '../Sidebar/Sidebar'

const Updates = () => (
  <Flex width='100%' height='100%' flex={1}>
    <Sidebar />
    <Content />
  </Flex>
)

export default Updates
