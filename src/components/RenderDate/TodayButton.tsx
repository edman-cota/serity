import { Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import { Task } from 'src/types/task.model'
import { Status } from '../../types/definitions'
import { setDueToday } from '@helpers/setDueToday'

interface Props {
  task: Task
  onClose: () => void
}

const TodayButton = ({ onClose, task }: Props) => {
  const [user] = useAuthState(auth)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const handleSetToday = () => {
    const status = setDueToday(user, task, workingProject)
    if (status === Status.SUCCESS) onClose()
  }

  return (
    <Button h='1.875rem' variant='solid' onClick={handleSetToday}>
      <FormattedMessage id='today' />
    </Button>
  )
}

export default TodayButton
