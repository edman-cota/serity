import { colors } from './colors'

export const getPriorityColor = (priority: number): string => {
  switch (priority) {
    case 0:
      return colors[3]
    case 1:
      return colors[2]
    case 2:
      return colors[1]
    case 3:
      return colors[0]
    default:
      return colors[3]
  }
}
