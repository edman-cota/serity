import { Flex } from '@chakra-ui/react'
import TodayButton from './TodayButton'
import TomorrowButton from './TomorrowButton'
import RemoveButton from './RemoveButton'
import { isTomorrow } from '../../helpers/isTomorrow'
import { isToday } from '../../helpers/isToday'

interface Props {
  task: any
  onClose(): void
}

const TopOptions = ({ task, onClose }: Props) => (
  <Flex mt='20px' mb='10px' px='16px' gap='5px'>
    {task && task?.due !== undefined ? <RemoveButton onClose={onClose} task={task} /> : null}
    {isToday(task?.due) ? null : <TodayButton onClose={onClose} dueDate={task?.due} task={task} />}
    {isTomorrow(task?.due) ? null : <TomorrowButton onClose={onClose} task={task} />}
  </Flex>
)

export default TopOptions
