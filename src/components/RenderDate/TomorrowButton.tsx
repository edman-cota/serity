import { Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import { Task } from 'src/models/task.model'
import { Status } from '../../models/definitions'
import { setDueTomorrow } from '@helpers/setDueTomorrow'

interface Props {
  onClose: () => void
  task: Task
}

const TomorrowButton = ({ onClose, task }: Props) => {
  const [user] = useAuthState(auth)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const handleSetTomorrow = () => {
    const status = setDueTomorrow(user, task, workingProject)
    if (status === Status.SUCCESS) onClose()
  }

  return (
    <Button h='1.875rem' variant='solid' onClick={handleSetTomorrow}>
      <FormattedMessage id='tomorrow' />
    </Button>
  )
}

export default TomorrowButton
