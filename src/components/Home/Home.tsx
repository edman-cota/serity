import { Flex } from '@chakra-ui/react'

import Navbar from './Navbar/Navbar'
import Header from '../../containers/Header/Header'

export const Main = (): JSX.Element => {
  return (
    <Flex
      direction='column'
      w='100%'
      h='100vh'
      bgGradient='linear(to-r, #1d4ed8, #1e40af, #2563eb)'
      overflow='hidden'
    >
      <Navbar />
      <Header />
    </Flex>
  )
}

export default Main
