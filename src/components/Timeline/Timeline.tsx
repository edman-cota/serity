import React from 'react'
import { Flex } from '@chakra-ui/react'

import TimelineBody from './TimelineBody'
import TimelineHeader from './TimelineHeader'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import useGetAllActivities from '@hooks/useGetAllActivities'

const Timeline = () => {
  const { activities, isLoading } = useGetAllActivities()

  return (
    <Flex w='100%' h='calc(100vh - 108.55px)' direction='column' mb='20px' overflowY='auto'>
      <TimelineHeader />
      {isLoading ? <LoadingScreen /> : <TimelineBody activities={activities} />}
    </Flex>
  )
}

export default Timeline
