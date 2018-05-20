import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Material-ui
import { RaisedButton } from 'material-ui'
import PaperRefined from './UI/PaperRefined'
import { TextField } from 'material-ui'
// Reducer
import { addTaskToFirebase, deleteTaskFromFirebase, onNewHeaderChange, onNewDescChange } from '../state/todos'

const ToDo = (props) => (
  <div>
    <PaperRefined className={'add-task-wrapper'}>
      <div className={'add-task-header'}>
        <div>
          <span>Header:&nbsp;</span>
          <TextField
            name={'new-task'}
            hintText={'Type header for your task'}
            onChange={props.onNewHeaderChange}
            value={props.newTaskHeader}
          />
        </div>
        <div>
          <RaisedButton
            primary={true}
            label={'Add task'}
            onClick={props.onTaskAdd}
          />
        </div>
      </div>
      <hr />
      <span>Description:&nbsp;</span>
      <TextField
        onChange={props.onNewDescChange}
        value={props.newTaskDescription}
        name={'new-task'}
        hintText={'Type task description'}
        multiLine={true}
      />
    </PaperRefined>

    <ul>
      {
        props.tasks.length ?
          props.tasks.map((task) => (
            <PaperRefined key={task.key}>
              <li>
                <div>
                  <h2>
                    {task.header}
                  </h2>
                  <hr />
                  <p>
                    {task.description}
                  </p>
                </div>
                <RaisedButton
                  secondary={true}
                  label={'Delete task'}
                  onClick={() => props.onTaskDelete(task.key)}
                />
              </li>
            </PaperRefined>
          ))
          :
          <PaperRefined centered>
            <h2>No tasks yet. Add some tasks to feed your duck.</h2>
          </PaperRefined>
      }
    </ul>
  </div>
)

export default connect(
  state => ({
    tasks: state.todos.tasks,
    newTaskHeader: state.todos.newTaskHeader,
    newTaskDescription: state.todos.newTaskDescription
  }),
  dispatch => ({
    onTaskAdd: () => dispatch(addTaskToFirebase()),
    onTaskDelete: (key) => dispatch(deleteTaskFromFirebase(key)),
    onNewHeaderChange: (event, value) => dispatch(onNewHeaderChange(value)),
    onNewDescChange: (event, value) => dispatch(onNewDescChange(value))
  })
)(ToDo)