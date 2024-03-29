export const isTomorrow = (due: string | undefined): boolean => {
  if (typeof due === 'undefined') {
    return false
  }

  const now = new Date()
  const tomorrow = new Date(now.setDate(now.getDate() + 1)).toString()
  const savedDueDate = new Date(due).toString().slice(0, 15)

  if (tomorrow.slice(0, 15) === savedDueDate) {
    return true
  }
  return false
}
