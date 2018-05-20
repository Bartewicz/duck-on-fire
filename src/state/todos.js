// Actions types
const ADD_TASK = 'todos/ADD_TASK'
const DELETE_TASK = 'todos/DELETE_TASK'
const NEW_TASK_CHANGE = 'todos/NEW_TASK_CHANGE'

// Actions creators
// This are functions that call for each Action
export const addTask = () => ({ type: ADD_TASK })
export const delTask = (index) => ({ type: DELETE_TASK, index })
export const newTaskChangeHandler = (newText) => ({ type: NEW_TASK_CHANGE, newText })

// Initial state - state is empty by default
const initialState = {
  tasks: [],
  newTaskText: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return state.newTaskText ?
        {
          ...state,
          tasks: state.tasks.concat({
            task: state.newTaskText,
            completed: false
          }),
          newTaskText: ''
        }
        :
        state
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) =>
          index !== action.index
        )
      }
    case NEW_TASK_CHANGE:
      return {
        ...state,
        newTaskText: action.newText
      }
    default:
      return state
  }
}
