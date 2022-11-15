import moment from 'moment'
import { Text } from '@chakra-ui/react'
import { FormattedMessage, FormattedDate } from 'react-intl'
import React from 'react'

// props = time in seconds
const RenderDateText = ({ due }: { due: string }) => {
  let dueDate: number = new Date(due).getTime()

  var todayDate = new Date().setHours(0, 0, 0, 0)
  var dateSaved: number = new Date(dueDate).setHours(0, 0, 0, 0)

  // BEFORE YESTERDAY
  if (todayDate - dateSaved > 86400000) {
    return (
      <Text color='var(--yesterday)' fontSize='14px' visibility='visible' px='10px'>
        <FormattedDate value={moment.unix(dueDate / 1000).toString()} month='short' day='2-digit' />
      </Text>
    )
  }

  // YESTERDAY
  if (todayDate - dateSaved === 86400000) {
    return (
      <Text color='var(--yesterday)' fontSize='14px' visibility='visible' pr='12px'>
        <FormattedMessage id='yesterday' />
      </Text>
    )
  }

  // TODAY
  if (todayDate === dateSaved) {
    return (
      <Text fontSize='14px' visibility='visible' pr='12px'>
        <FormattedMessage id='today' />
      </Text>
    )
  }

  // TOMORROW
  if (dateSaved - todayDate === 86400000) {
    return (
      <Text color='var(--tomorrow)' fontSize='14px' visibility='visible' pr='12px'>
        <FormattedMessage id='tomorrow' />
      </Text>
    )
  }

  // AFTER TOMORROW
  return (
    <Text color='var(--tomorrow)' fontSize='14px' visibility='visible' pr='12px'>
      <FormattedDate value={moment.unix(dueDate / 1000).toString()} month='short' day='2-digit' />
    </Text>
  )
}

export default RenderDateText
