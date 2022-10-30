import { Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import type { RootState } from '../../store'
import { Status } from '../../enums/definitions'
import { setDueToday } from '../../helpers/setDueToday'
import { isToday } from '../../helpers/isToday'

interface Props {
  onClose: any
  dueDate: string
  task: any
}

const TodayButton = ({ onClose, dueDate, task }: Props) => {
  const [user] = useAuthState(auth)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const handleSetToday = () => {
    if (isToday(dueDate)) {
      onClose()
      return
    }
    const status = setDueToday(user, task, workingProject)
    if (status === Status.SUCCESS) onClose()
  }

  return (
    <Button h="1.875rem" variant="solid" onClick={handleSetToday}>
      <FormattedMessage id="today" />
    </Button>
  )
}

export default TodayButton
