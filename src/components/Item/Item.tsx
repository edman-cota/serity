import { useSelector } from 'react-redux'
import { Flex, HStack, ListItem, useColorModeValue } from '@chakra-ui/react'

import ItemMenu from './ItemMenu'
import ItemTitle from './ItemTitle'
import { RootState } from 'src/store'
import { Task } from '../../models/task.model'
import RenderStatus from '../RenderStatus/RenderStatus'
import React from 'react'
import DragIndicator from './DragIndicator'

interface Props {
  task: Task
  index: number
}

const Item = ({ task, index }: Props) => {
  const activeIndex = useSelector((state: RootState) => state.activeIndex.value)
  const hover = useColorModeValue('gray.200', 'whiteAlpha.200')

  return (
    <ListItem
      role='group'
      borderRadius='base'
      _hover={{ background: hover }}
      bg={index === activeIndex ? hover : 'transparent'}
    >
      <HStack h='39px'>
        <DragIndicator />
        <Flex mx='0px'>
          <RenderStatus task={task} />
        </Flex>
        <Flex flex={1} alignItems='center' height='100%'>
          <ItemTitle task={task} index={index} />
          <ItemMenu task={task} />
        </Flex>
      </HStack>
    </ListItem>
  )
}

export default Item
