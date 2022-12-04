import { FormattedMessage } from 'react-intl'

import { HiViewBoards } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
import { VscListSelection } from 'react-icons/vsc'
import { BsFillCalendarMinusFill } from 'react-icons/bs'
import React from 'react'

const View = ({ view }: { view: string | null }) => {
  switch (view) {
    case 'tree':
      return (
        <span style={TextStyle}>
          <VscListSelection />
          <span style={{ padding: '0 10px', fontSize: '15px' }}>
            <FormattedMessage id={view} />
          </span>
          <FiChevronDown />
        </span>
      )
    case 'kanban':
      return (
        <span style={TextStyle}>
          <HiViewBoards />
          <span style={{ padding: '0 10px', fontSize: '15px' }}>
            <FormattedMessage id={view} />
          </span>
          <FiChevronDown />
        </span>
      )
    case 'calendar':
      return (
        <span style={TextStyle}>
          <BsFillCalendarMinusFill />
          <span style={{ padding: '0 10px', fontSize: '15px' }}>
            <FormattedMessage id={view} />
          </span>
          <FiChevronDown />
        </span>
      )
    default:
      return (
        <span style={TextStyle}>
          <FormattedMessage id='tree' />
          <FiChevronDown />
        </span>
      )
  }
}

export default View

const TextStyle = {
  display: 'flex',
  alignItems: 'center',
}
