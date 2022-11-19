import React from 'react'
import { Flex, useColorModeValue, VStack } from '@chakra-ui/react'

import Toolbar from './Toolbar'
import CompletionCurveChart from './CompletionCurve'
import AchievementCard from '../Cards/AchievementCard'
import HeatmapChart from './HeatmapChart'

const Main = (): JSX.Element => {
  const cardBackground = useColorModeValue('white', '#1F2733')
  return (
    <VStack w='100%'>
      <Toolbar />
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        pb={{ base: '40px', xl: '40px' }}
        w='100%'
        pt='0px'
        mx='auto'
        justifyContent='center'
      >
        <AchievementCard />
        <CompletionCurveChart />
      </Flex>

      <Flex w={{ base: '95%', sm: '85%', xl: '1010px' }} mx='auto' bg={cardBackground}>
        <HeatmapChart />
      </Flex>
    </VStack>
  )
}

export default Main
