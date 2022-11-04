import { Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import type { RootState } from '../../store'
import { Status } from '../../enums/definitions'
import { isTomorrow } from '../../helpers/isTomorrow'
import { setDueTomorrow } from '../../helpers/setDueTomorrow'

interface Props {
  onClose: any
  task: any
}

const TomorrowButton = ({ onClose, task }: Props) => {
  const [user] = useAuthState(auth)
  const workingProject = useSelector((state: RootState) => state.workingProject.value)

  const handleSetTomorrow = () => {
    if (isTomorrow(task?.due)) {
      onClose()
      return
    }

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
