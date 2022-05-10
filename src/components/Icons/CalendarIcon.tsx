import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";

const CalendarIcon = ({ due }: { due: string }) => {
  let dueDate: number = new Date(due).getTime();

  let todayDate = new Date().setHours(0, 0, 0, 0);
  let dateSaved = new Date(dueDate).setHours(0, 0, 0, 0);

  if (isNaN(dateSaved)) {
    return <HiOutlineCalendar fontSize="16px" color="var(--none)" />;
  }

  // BEFORE YESTERDAY
  if (todayDate - dateSaved > 86400000) {
    return <HiOutlineCalendar fontSize="16px" color="var(--yesterday)" />;
  }

  // YESTERDAY
  if (todayDate - dateSaved === 86400000) {
    return <HiOutlineCalendar fontSize="16px" color="var(--yesterday)" />;
  }

  // TODAY
  if (todayDate === dateSaved) {
    return <HiOutlineCalendar fontSize="16px" />;
  }

  // TOMORROW
  if (dateSaved - todayDate === 86400000) {
    return <HiOutlineCalendar fontSize="16px" color="var(--tomorrow)" />;
  }

  // AFTER TOMORROW
  return <HiOutlineCalendar fontSize="16px" color="var(--tomorrow)" />;
};

export default CalendarIcon;
