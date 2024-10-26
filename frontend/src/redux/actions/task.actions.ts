export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE'
export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST'
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS'
export const FETCH_TASK_FAILURE = 'FETCH_TASK_FAILURE'

export type Task = {
  taskName: string;
  isDone: boolean;
};

export const addTaskRequest = (task: Task) => ({
  type: ADD_TASK_REQUEST,
  payload: task
})

export const addTaskSuccess = (task: Task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task
})

export const addTaskFailure = (error: string) => ({
  type: ADD_TASK_FAILURE,
  error
})

export const fetchTaskRequest = () => ({
  type: FETCH_TASK_REQUEST
})

export const fetchTaskSuccess = (tasks: Task[]) => ({
  type: FETCH_TASK_SUCCESS,
  payload: tasks
})

export const fetchTaskFailure = (error: string) => ({
  type: FETCH_TASK_FAILURE,
  error
})
