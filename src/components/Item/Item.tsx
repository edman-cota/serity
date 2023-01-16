import { useSelector } from 'react-redux'
import { Flex, HStack, ListItem, useColorModeValue } from '@chakra-ui/react'

import ItemMenu from './ItemMenu'
import ItemTitle from './ItemTitle'
import { RootState } from 'src/store'
import { Task } from '../../models/task.model'
import RenderStatus from '../RenderStatus/RenderStatus'
import React from 'react'

interface Props {
  task: Task
  index: number
}

const Item = ({ task, index, innerRef }: Props) => {
  const activeIndex = useSelector((state: RootState) => state.activeIndex.value)
  const hover = useColorModeValue('gray.200', 'whiteAlpha.200')

  return (
    <ListItem
      ref={innerRef}
      role='group'
      cursor='pointer'
      borderRadius='base'
      _hover={{ background: hover }}
      bg={index === activeIndex ? hover : 'transparent'}
    >
      <HStack h='40px'>
        <Flex px='6px'>
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
