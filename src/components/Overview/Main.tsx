import React from 'react'
import { Flex, VStack } from '@chakra-ui/react'

// import CompletionRateChart from "./CompletionRate";
import AchievementCard from '../Cards/AchievementCard'
import CompletionCurveChart from './CompletionCurve'
import Toolbar from './Toolbar'

const Main = (): JSX.Element => {
  return (
    <VStack w="100%">
      <Toolbar />
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        pb={{ base: '40px', xl: '40px' }}
        w="100%"
        pt="0px"
        justifyContent="center"
      >
        <AchievementCard />
        <CompletionCurveChart />
      </Flex>

      {/* <Flex
        direction={{ base: "column", xl: "row" }}
        my={{ base: "0px" }}
        w="100%"
        pt="0px"
        justifyContent="center"
      >
        <CompletionRateChart />
        <CompletionCurveChart />
      </Flex> */}
    </VStack>
  )
}

export default Main
