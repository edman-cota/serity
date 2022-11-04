import { Flex, VStack } from '@chakra-ui/react'

import Toolbar from './Toolbar'
import CompletionCurveChart from './CompletionCurve'
import AchievementCard from '../Cards/AchievementCard'

const Main = (): JSX.Element => {
  return (
    <VStack w='100%'>
      <Toolbar />
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        pb={{ base: '40px', xl: '40px' }}
        w='100%'
        pt='0px'
        justifyContent='center'
      >
        <AchievementCard />
        <CompletionCurveChart />
      </Flex>
    </VStack>
  )
}

export default Main
