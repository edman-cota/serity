import React from 'react'
import { Text } from '@chakra-ui/react'
import { FormattedMessage } from 'react-intl'

interface Props {
  type: number
}

type Id = {
  [key: number]: string
}

const Verbose = ({ type }: Props): JSX.Element => {
  const ids: Id = {
    1: 'added',
    2: 'set_the_priority_of',
    3: 'set_the_due_date_of',
    4: 'unset_the_due_date_of',
    5: 'completed_the_task',
    6: 'reopen',
    7: 'rename_the_task_to',
    8: 'edit_description',
  }

  return (
    <Text as='span' pr='7px'>
      <FormattedMessage id={ids[type]} />
    </Text>
  )
}

export default Verbose
