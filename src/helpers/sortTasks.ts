import { Task } from 'src/models/task.model'

export function sortTasks(tasks: Task[], sortType: Boolean) {
  const orderedData = orderData('content', false, tasks)
  return orderedData
}

const orderData = (field: string, sortType: boolean, data) => {
  const datos = [...data]
  console.log('inner field: ' + field)

  const orderFunction = (a, b) => {
    return comparator(a[field], b[field], sortType)
  }

  datos.sort(orderFunction)

  return datos
}

const comparator = (a, b, sortType: boolean) => {
  if (a === b) {
    return 0
  } else if (a > b) {
    return sortType ? 1 : -1
  } else {
    return sortType ? -1 : 1
  }
}
