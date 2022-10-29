export const calculatePercentage = (
  completedTasks: number,
  tasksLength: number,
): number => {
  const result = Math.round(
    (completedTasks / (completedTasks + tasksLength)) * 100,
  )

  if (Number.isNaN(result)) {
    return 0
  }

  return result
}
