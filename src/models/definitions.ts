export enum PriorityType {
  None = 0,
  Low = 1,
  Medium = 2,
  High = 3,
}

export enum ActivityType {
  ADD_TASK_ACTIVITY_TYPE = 1,
  UPDATE_PRIORITY_ACTIVITY_TYPE = 2,
  CHANGE_DUE_DATE_ACTIVITY_TYPE = 3,
  REMOVE_DUE_DATE_ACTIVITY_TYPE = 4,
  COMPLETE_TASK_ACTIVITY_TYPE = 5,
  REOPEN_TASK_ACTIVITY_TYPE = 6,
  RENAME_TASK_ACTIVITY_TYPE = 7,
  UPDATE_DESCRIPTION_ACTIVITY_TYPE = 8,
}

export enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum DBRef {
  Tasks = 'tasks',
  Projects = 'projects',
  Activities = 'activities',
}
