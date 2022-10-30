import React from 'react'
import { FormattedMessage } from 'react-intl'

interface PriorityProps {
  priority: number
}

const Priority = ({ priority }: PriorityProps): JSX.Element => {
  switch (priority) {
    case 0:
      return (
        <span style={{ paddingRight: '7px' }}>
          <span style={{ paddingRight: '7px' }}>
            <FormattedMessage id="to" />
          </span>
          <b>
            <FormattedMessage id="none" />
          </b>
        </span>
      )
    case 1:
      return (
        <span style={{ paddingRight: '7px' }}>
          <span style={{ paddingRight: '7px' }}>
            <FormattedMessage id="to" />
          </span>
          <b>
            <FormattedMessage id="low" />
          </b>
        </span>
      )
    case 2:
      return (
        <span style={{ paddingRight: '7px' }}>
          <span style={{ paddingRight: '7px' }}>
            <FormattedMessage id="to" />
          </span>
          <b>
            <FormattedMessage id="medium" />
          </b>
        </span>
      )
    case 3:
      return (
        <span style={{ paddingRight: '7px' }}>
          <span style={{ paddingRight: '7px' }}>
            <FormattedMessage id="to" />
          </span>
          <b>
            <FormattedMessage id="high" />
          </b>
        </span>
      )
    default:
      return <span> </span>
  }
}

export default Priority
