/* eslint-disable object-curly-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Flex, HStack, ListItem, useColorModeValue, useColorMode } from '@chakra-ui/react'
import RenderStatus from '../RenderStatus/RenderStatus'
import ItemTitle from './ItemTitle'
import ItemMenu from './ItemMenu'
import './Item.scss'
import { TaskProps } from '../../types/task.model'
import type { RootState } from '../../store'

interface Props {
  task: TaskProps
  index: number
}

const Item = ({ task, index }: Props) => {
  const activeIndex = useSelector((state: RootState) => state.activeIndex.value)
  const { colorMode } = useColorMode()
  const hover = useColorModeValue('gray.200', 'gray.700')

  // console.log("index", index);

  // const bg = {index !== activeIndex && colorMode === "dark" ? "#1f2733" : "transparent"}

  return (
    <ListItem
      className={`tree-row${index === activeIndex ? ' selected' : ''}`}
      borderRadius="4px"
      // backgroundColor={bg}
      cursor="pointer"
      _hover={{ background: hover }}
      role="group"
    >
      <HStack h="40px">
        <Flex px="8px">
          <RenderStatus task={task} />
        </Flex>
        <Flex flex={1} alignItems="center" height="100%">
          <ItemTitle task={task} index={index} />
          <ItemMenu task={task} />
        </Flex>
      </HStack>
    </ListItem>
  )
}

Item.propTypes = {
  task: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
}

export default Item
