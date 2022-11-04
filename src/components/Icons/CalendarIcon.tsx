import { BsCalendar2 } from 'react-icons/bs'

interface Props {
  due: string
}

const CalendarIcon = ({ due }: Props) => {
  let dueDate: number = new Date(due).getTime()

  let todayDate = new Date().setHours(0, 0, 0, 0)
  let dateSaved = new Date(dueDate).setHours(0, 0, 0, 0)

  if (isNaN(dateSaved)) {
    return <BsCalendar2 fontSize='14px' color='var(--none)' />
  }

  // BEFORE YESTERDAY
  if (todayDate - dateSaved > 86400000) {
    return <BsCalendar2 fontSize='14px' color='var(--yesterday)' />
  }

  // YESTERDAY
  if (todayDate - dateSaved === 86400000) {
    return <BsCalendar2 fontSize='14px' color='var(--yesterday)' />
  }

  // TODAY
  if (todayDate === dateSaved) {
    return <BsCalendar2 fontSize='14px' />
  }

  // TOMORROW
  if (dateSaved - todayDate === 86400000) {
    return <BsCalendar2 fontSize='14px' color='var(--tomorrow)' />
  }

  // AFTER TOMORROW
  return <BsCalendar2 fontSize='14px' color='var(--tomorrow)' />
}

export default CalendarIcon
