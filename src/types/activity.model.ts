export type Activity = {
  id?: string;
  due: string;
  type: number;
  content: string;
  taskId?: string;
  username: string;
  priority: number;
  createdAt: string;
  projectId?: string;
  description: string;
};
