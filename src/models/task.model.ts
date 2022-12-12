export interface Task {
  id: string
  due?: string
  content: string
  completed?: number
  createdAt?: string
  createdBy?: string
  priority: number
  projectId?: string
  description?: string
}