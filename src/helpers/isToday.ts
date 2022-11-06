export const isToday = (due: string | undefined): boolean => {
  if (typeof due === 'undefined') {
    return false
  }

  const savedDueDate = new Date(due).toString().slice(0, 15)
  const newDue = new Date().toString().slice(0, 15)

  if (savedDueDate === newDue) {
    return true
  }
  return false
}
