import { BsFlag } from 'react-icons/bs'
import { colors } from '../../helpers/colors'

interface Props {
  priority: number
}

const RenderPriority = ({ priority }: Props) => {
  switch (priority) {
    case 0: // None
      return <BsFlag color={colors[3]} fontSize="14px" />
    case 1: // Low
      return <BsFlag color={colors[2]} fontSize="14px" />
    case 2: // Medium
      return <BsFlag color={colors[1]} fontSize="14px" />
    case 3: // High
      return <BsFlag color={colors[0]} fontSize="14px" />
    default:
      return <BsFlag color={colors[3]} fontSize="14px" />
  }
}

export default RenderPriority
