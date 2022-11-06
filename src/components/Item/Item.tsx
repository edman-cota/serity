import { useSelector } from 'react-redux'
import { Flex, HStack, ListItem, useColorModeValue } from '@chakra-ui/react'

import './Item.scss'
import ItemMenu from './ItemMenu'
import ItemTitle from './ItemTitle'
import type { RootState } from '../../store'
import { Task } from '../../types/task.model'
import RenderStatus from '../RenderStatus/RenderStatus'

interface Props {
  task: Task
  index: number
}

const Item = ({ task, index }: Props) => {
  const activeIndex = useSelector((state: RootState) => state.activeIndex.value)
  const hover = useColorModeValue('gray.200', 'gray.700')

  return (
    <ListItem
      className={`tree-row${index === activeIndex ? ' selected' : ''}`}
      borderRadius='base'
      cursor='pointer'
      _hover={{ background: hover }}
      role='group'
    >
      <HStack h='40px'>
        <Flex px='8px'>
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
