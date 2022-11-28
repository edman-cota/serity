import { useWindowSize } from 'react-use'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { CgMinimizeAlt } from 'react-icons/cg'
import { FiChevronsRight } from 'react-icons/fi'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineHistoryToggleOff } from 'react-icons/md'
import { Flex, List, ListItem, Button } from '@chakra-ui/react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'

import { RootState } from 'src/store'
import { setIsOpen } from '@features/counter/onToggleSlice'
import { setIsExpanded } from '@features/counter/expandedSlice'
import DropdownTaskOptions from '../Dropdown/DropdownTaskOptions'
import { setActiveIndex } from '@features/counter/activeIndexSlice'
import { setSelectedTaskId } from '@features/counter/selectedTaskIdSlice'
import { setTaskActivityVisibility } from '@features/counter/taskActivitySlice'
import React from 'react'
import { useGetTask } from '@hooks/useGetTask'

const Navbar = () => {
  const { task } = useGetTask()
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

  console.log(isExpanded)

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
        {width >= 770 ? (
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
          <DropdownTaskOptions />
        </ListItem>
      </List>
    </Flex>
  )
}

export default Navbar
