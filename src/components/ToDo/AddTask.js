import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Material-ui
import PaperRefined from '../UI/PaperRefined'
import { TextField, RaisedButton } from 'material-ui'
// Reducer
import { addTaskToFirebase, onNewHeaderChange, onNewDescChange } from '../../state/todos'

const AddTask = (props) => (
  <PaperRefined>
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
    <div className={'add-task-wrapper'}>
      <div>
        <span>Description:&nbsp;</span>
        <br />
        <TextField
          onChange={props.onNewDescChange}
          value={props.newTaskDescription}
          name={'new-task'}
          hintText={'Type task description'}
          multiLine={true}
        />
      </div>
      <RaisedButton
        primary={true}
        label={<b>Add</b>}
        onClick={props.onTaskAdd}
      />
    </div>
  </PaperRefined>
)

export default connect(
  state => ({
    newTaskHeader: state.todos.newTaskHeader,
    newTaskDescription: state.todos.newTaskDescription
  }),
  dispatch => ({
    onTaskAdd: () => dispatch(addTaskToFirebase()),
    onNewHeaderChange: (event, value) => dispatch(onNewHeaderChange(value)),
    onNewDescChange: (event, value) => dispatch(onNewDescChange(value))
  })
)(AddTask)