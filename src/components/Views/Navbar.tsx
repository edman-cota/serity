import React from 'react'
import { useWindowSize } from 'react-use'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { CgMinimizeAlt } from 'react-icons/cg'
import { GoPrimitiveDot } from 'react-icons/go'
import { FiChevronsRight } from 'react-icons/fi'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineHistoryToggleOff } from 'react-icons/md'
import { Flex, List, ListItem, Button, Text } from '@chakra-ui/react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'

import { RootState } from 'src/store'
import { setIsOpen } from '@features/counter/onToggleSlice'
import { setIsExpanded } from '@features/counter/expandedSlice'
import TaskOptionsMenu from '../Dropdown/TaskOptionsMenu'
import { setActiveIndex } from '@features/counter/activeIndexSlice'
import { setSelectedTaskId } from '@features/counter/selectedTaskIdSlice'
import { setTaskActivityVisibility } from '@features/counter/taskActivitySlice'

const Navbar = () => {
  const task = useSelector((state: RootState) => state.task.value)
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const isOpen = useSelector((state: RootState) => state.isOpen.value)
  const isExpanded = useSelector((state: RootState) => state.isExpanded.value)
  const isTaskActivityVisible = useSelector((state: RootState) => state.isTaskActivityVisible.value)
  const label = isExpanded ? <FormattedMessage id='contract' /> : <FormattedMessage id='expand' />

  const closeView = () => {
    dispatch(setSelectedTaskId(''))
    dispatch(setActiveIndex(-1))
    dispatch(setIsExpanded(false))
    dispatch(setIsOpen(!isOpen))
  }

  const expandScreen = () => {
    dispatch(setIsExpanded(!isExpanded))
  }

  const toggleTaskActivityVisibility = () => {
    dispatch(setTaskActivityVisibility(!isTaskActivityVisible))
  }

  return (
    <Flex h='55px' w='100%' justifyContent='space-between' px='10px' my='10px' alignItems='center'>
      <Flex>
        <Tooltip
          label={<FormattedMessage id='hide_detail_panel' />}
          placement='left'
          command='SPACE'
        >
          <Button px='0px' onClick={() => closeView()}>
            <FiChevronsRight size={19} />
          </Button>
        </Tooltip>
        {task.completed ? (
          <Flex alignItems='center'>
            <Text
              as='span'
              bg='rgba(55, 151, 82, 0.4)'
              display='flex'
              justifyContent='center'
              alignItems='center'
              borderRadius='50%'
              w='16px'
              h='16px'
            >
              <GoPrimitiveDot color='#00CE69' />
            </Text>
            <Text as='span' px='6px' fontSize='small'>
              Completed
            </Text>
          </Flex>
        ) : null}
        {isExpanded ? (
          <>
            <Tooltip label='Move up' command='K'>
              <Button>
                <HiOutlineChevronUp />
              </Button>
            </Tooltip>
            <Tooltip label='Move down' command='J'>
              <Button>
                <HiOutlineChevronDown />
              </Button>
            </Tooltip>
          </>
        ) : null}
      </Flex>
      <List display='flex' alignItems='center' gap='20px'>
        {!task.completed && width >= 770 ? (
          <ListItem>
            <Tooltip label={label} command='⇧ + SPACE'>
              <Button onClick={expandScreen}>
                {isExpanded ? <CgMinimizeAlt /> : <AiOutlineExpandAlt />}
              </Button>
            </Tooltip>
          </ListItem>
        ) : null}
        <ListItem>
          <Tooltip label={<FormattedMessage id='toggle_task_activity' />}>
            <Button onClick={toggleTaskActivityVisibility}>
              <MdOutlineHistoryToggleOff />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem>
          <TaskOptionsMenu />
        </ListItem>
      </List>
    </Flex>
  )
}

export default Navbar
