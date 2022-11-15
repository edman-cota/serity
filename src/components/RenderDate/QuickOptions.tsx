import { Flex, HStack } from '@chakra-ui/react'
import React from 'react'

import PriorityIcon from '../RenderPriority/PriorityIcon'
import CalendarPopover from './CalendarPopover'

const QuickOptions = () => (
  <HStack w='100%'>
    <CalendarPopover />
    <Flex ml='20px'>
      <PriorityIcon />
    </Flex>
  </HStack>
)

export default QuickOptions
