import { Flex } from '@chakra-ui/react'

import Navbar from './Navbar/Navbar'
import Header from '../../containers/Header/Header'
import Features from './Features/Features'

export const Main = (): JSX.Element => {
  return (
    <Flex direction='column' w='100%' overflow='hidden'>
      <Flex direction='column' bgGradient='linear(to-r, #1d4ed8, #1e40af, #2563eb)'>
        <Navbar />
        <Header />
      </Flex>
      <Features />
    </Flex>
  )
}

export default Main
