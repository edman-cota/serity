import React from 'react'
import { BsFlag } from 'react-icons/bs'
import { colors } from '../../helpers/colors'

interface Props {
  priority: number
}

const RenderPriority = ({ priority }: Props) => {
  switch (priority) {
    case 0: // None
      return <BsFlag color={colors[3]} fontSize='14px' style={{ margin: 'auto' }} />
    case 1: // Low
      return <BsFlag color={colors[2]} fontSize='14px' style={{ margin: 'auto' }} />
    case 2: // Medium
      return <BsFlag color={colors[1]} fontSize='14px' style={{ margin: 'auto' }} />
    case 3: // High
      return <BsFlag color={colors[0]} fontSize='14px' style={{ margin: 'auto' }} />
    default:
      return <BsFlag color={colors[3]} fontSize='14px' style={{ margin: 'auto' }} />
  }
}

export default RenderPriority
