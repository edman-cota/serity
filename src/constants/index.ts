export const ADD_TASK_ACTIVITY_TYPE = 1;
export const UPDATE_PRIORITY_ACTIVITY_TYPE = 2;
export const CHANGE_DUE_DATE_ACTIVITY_TYPE = 3;
export const REMOVE_DUE_DATE_ACTIVITY_TYPE = 4;
export const COMPLETE_TASK_ACTIVITY_TYPE = 5;
export const REOPEN_TASK_ACTIVITY_TYPE = 6;
export const RENAME_TASK_ACTIVITY_TYPE = 7;
export const UPDATE_DESCRIPTION_ACTIVITY_TYPE = 8;

export const MAX_PROJECTS_IN_FREE_TIER = 5;

export const SUCCESS = "success";
export const ERROR = "error";

export const TOAST = {
  status: {
    success: {
      description: "Task duplicated sucessfully",
      status: "SUCCESS",
      isClosable: true,
    },
    error: {
      description: "Failed to duplicate task",
      status: "ERROR",
      isClosable: true,
    },
  },
};