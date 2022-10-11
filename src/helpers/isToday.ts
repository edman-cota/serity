export const isToday = (due: string): boolean => {
  const savedDueDate = new Date(due).toString().slice(0, 15);
  const newDue = new Date().toString().slice(0, 15);

  if (savedDueDate === newDue) {
    return true;
  }
  return false;
};
