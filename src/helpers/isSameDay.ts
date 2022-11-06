export const isSameDay = (saved: string | undefined, now: string): boolean => {
  if (typeof saved === 'undefined') {
    return false
  }

  if (saved === now) {
    return true
  }
  return false
}
