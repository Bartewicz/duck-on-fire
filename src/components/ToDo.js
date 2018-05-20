import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Material-ui
import { RaisedButton } from 'material-ui'
import PaperRefined from './UI/PaperRefined'
import { TextField } from 'material-ui'
// Reducer
import { addTask, delTask, newTaskChangeHandler } from '../state/todos'

const style = {
  center: {
    textAlign: 'center'
  }
}

const ToDo = (props) => (
  <div>
    <PaperRefined style={style.center}>
      <TextField
        name={'new-task'}
        onChange={props.onNewTaskChangeHandler}
        value={props.newTaskText}
      />
    </PaperRefined>
    <PaperRefined style={style.center}>
      <RaisedButton
        primary={true}
        label={'Add task'}
        onClick={props.onAddTask}
      />
    </PaperRefined>
    <ul>
      {
        props.tasks.map((task, index) => (
          <PaperRefined>
            <li>
              {task.task}
              <RaisedButton
                secondary={true}
                label={'Delete task'}
                onClick={() => props.delTask(index)}
              />
            </li>
          </PaperRefined>
        ))
      }
    </ul>
  </div>
)

export default connect(
  state => ({
    tasks: state.todos.tasks,
    newTaskText: state.todos.newTaskText
  }),
  dispatch => ({
    onAddTask: () => dispatch(addTask()),
    delTask: (index) => dispatch(delTask(index)),
    onNewTaskChangeHandler: (event, value) => dispatch(newTaskChangeHandler(value))
  })
)(ToDo)