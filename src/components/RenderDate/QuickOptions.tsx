import { Flex, HStack } from '@chakra-ui/react'
import React from 'react'

import PriorityIcon from '../RenderPriority/PriorityIcon'
import CalendarPopover from './CalendarPopover'

const QuickOptions = () => (
  <HStack w='100%' gap='20px'>
    <CalendarPopover />
    <PriorityIcon />
  </HStack>
)

export default QuickOptions
