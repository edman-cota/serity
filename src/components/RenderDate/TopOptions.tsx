import { Flex } from '@chakra-ui/react'
import TodayButton from './TodayButton'
import RemoveButton from './RemoveButton'
import { isToday } from '@helpers/isToday'
import { Task } from 'src/types/task.model'
import TomorrowButton from './TomorrowButton'
import { isTomorrow } from '@helpers/isTomorrow'

interface Props {
  onClose(): void
  task: Task
}

const TopOptions = ({ task, onClose }: Props) => (
  <Flex mt='20px' mb='10px' px='16px' gap='5px'>
    {task && task?.due !== undefined ? <RemoveButton onClose={onClose} task={task} /> : null}
    {isToday(task.due) ? null : <TodayButton onClose={onClose} task={task} />}
    {isTomorrow(task?.due) ? null : <TomorrowButton onClose={onClose} task={task} />}
  </Flex>
)

export default TopOptions
