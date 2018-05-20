import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Material-ui
import PaperRefined from './UI/PaperRefined'
import { TextField, RaisedButton, IconButton } from 'material-ui'
import Power from 'material-ui/svg-icons/action/power-settings-new'
// Reducer
import { addTaskToFirebase, deleteTaskFromFirebase, onNewHeaderChange, onNewDescChange } from '../state/todos'

const ToDo = (props) => (
  <div>
    <PaperRefined className={'add-task-wrapper'}>
      <div className={'task-title'}>
        <span>Header:&nbsp;</span>
        <br />
        <TextField
          name={'new-task'}
          hintText={'Type header for your task'}
          onChange={props.onNewHeaderChange}
          value={props.newTaskHeader}
        />
      </div>
      <hr />
      <span>Description:&nbsp;</span>
      <br />
      <TextField
        onChange={props.onNewDescChange}
        value={props.newTaskDescription}
        name={'new-task'}
        hintText={'Type task description'}
        multiLine={true}
      />
      <RaisedButton
        primary={true}
        label={<b>Add</b>}
        onClick={props.onTaskAdd}
      />
    </PaperRefined>

    <section>
      {
        props.tasks.length ?
          props.tasks.map((task) => (
            <PaperRefined key={task.key}>
              <div className={'task-header'}>
                <h2 className={'task-title'}>
                  {task.header}
                </h2>
                <RaisedButton
                  secondary={true}
                  label={<b>Delete</b>}
                  onClick={() => props.onTaskDelete(task.key)}
                />
              </div>
              <hr />
              <div className={'task-body'}>
                <p>
                  {task.description}
                </p>
              </div>
            </PaperRefined>
          ))
          :
          <PaperRefined centered>
            <h2>No tasks yet. Add some tasks to feed your duck.</h2>
          </PaperRefined>
      }
    </section>
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