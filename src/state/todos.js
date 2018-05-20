import { database } from '../firebase'

// Actions types
const GET_TASKS = 'todos/GET_TASKS'
const ADD_TASK = 'todos/ADD_TASK'
const DELETE_TASK = 'todos/DELETE_TASK'
const NEW_HEADER_CHANGE = 'todos/NEW_HEADER_CHANGE'
const NEW_DESC_CHANGE = 'todos/NEW_DESC_CHANGE'

// Actions creators
// This are functions that call for each Action
const getTasks = (tasks) => ({ type: GET_TASKS, tasks })

export const initTasksSync = () => (dispatch, getState) => {
  const userUid = getState().auth.user.uid
  database.ref(`/users/${userUid}/tasks`)
    .on('value', (snapshot) => {
      const tasks =
        (Object.entries(snapshot.val() || {})
          .map(([key, value]) => (
            { ...value, key }
          ))
        )
      dispatch(getTasks(tasks))
    })
}

const addTask = () => ({ type: ADD_TASK })
const delTask = () => ({ type: DELETE_TASK })

export const onNewHeaderChange = (value) => ({ type: NEW_HEADER_CHANGE, value })
export const onNewDescChange = (value) => ({ type: NEW_DESC_CHANGE, value })

export const addTaskToFirebase = () => (dispatch, getState) => {
  if (getState().todos.newTaskHeader && getState().todos.newTaskDescription) {
    const userUid = getState().auth.user.uid
    const newTaskKey = database.ref(`/users/${userUid}/tasks`).push().key
    const newTask = {
      header: getState().todos.newTaskHeader,
      description: getState().todos.newTaskDescription
    }
    database.ref(`/users/${userUid}/tasks`)
      .push(newTask)
      .then(() => dispatch(addTask()))
  } else {}
}

export const deleteTaskFromFirebase = (key) => (dispatch, getState) => {
  const userUid = getState().auth.user.uid
  database.ref(`/users/${userUid}/tasks/${key}`)
    .remove()
    .then(() => dispatch(delTask()))
}

// Initial state - state is empty by default
const initialState = {
  tasks: [],
  newTaskHeader: '',
  newTaskDescription: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return action.tasks.length ?
        {
          ...state,
          tasks: action.tasks
        }
        :
        state
    case ADD_TASK:
      return state.newTaskHeader && state.newTaskDescription ?
        {
          ...state,
          newTaskHeader: '',
          newTaskDescription: ''

        }
        :
        state
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) =>
          task.key !== action.key
        )
      }
    case NEW_HEADER_CHANGE:
      return {
        ...state,
        newTaskHeader: action.value
      }
    case NEW_DESC_CHANGE:
      return {
        ...state,
        newTaskDescription: action.value
      }
    default:
      return state
  }
}
