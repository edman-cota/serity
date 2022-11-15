import React from 'react'
import { Flex } from '@chakra-ui/react'
import TodayButton from './TodayButton'
import RemoveButton from './RemoveButton'
import { isToday } from '@helpers/isToday'
import TomorrowButton from './TomorrowButton'
import { useGetTask } from '@hooks/useGetTask'
import { isTomorrow } from '@helpers/isTomorrow'

interface Props {
  onClose(): void
}

const TopOptions = ({ onClose }: Props) => {
  const { task } = useGetTask()
  return (
    <Flex mt='20px' mb='10px' px='16px' gap='5px'>
      {task[0] && task[0]?.due !== undefined ? (
        <RemoveButton onClose={onClose} task={task[0]} />
      ) : null}
      {isToday(task[0]?.due) ? null : <TodayButton onClose={onClose} task={task[0]} />}
      {isTomorrow(task[0]?.due) ? null : <TomorrowButton onClose={onClose} task={task[0]} />}
    </Flex>
  )
}

export default TopOptions
