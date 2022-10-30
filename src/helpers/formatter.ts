// Here use formatter for AMPM and beautifyUsername and ...
export const formatAMPM = (date: any) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'

  hours %= 12
  hours = hours || 12
  minutes = minutes < 10 ? `0${minutes}` : minutes

  const strTime = `${hours}:${minutes} ${ampm}`

  return strTime
}

export const formatUrl = (input: string) => {
  const output = input.replace(/\s+/g, ' ').trim().toLocaleLowerCase()
  return output.replace(/\s/g, '-')
}

export const formatUsername = (input?: string | null) => {
  return input?.split('@')[0]
}
