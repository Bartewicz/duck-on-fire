import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Reducer
import {  toggleToDo, toggleInProgress, toggleCompleted } from '../../state/todos'

const Buttons = (props) => (
  <div className={'buttons-wrapper'}>
    {
      props.task.status === 'to-do' ?
        <button disabled onClick={() => props.toggleToDo(props.task)}>To Do</button>
        :
        <button onClick={() => props.toggleToDo(props.task)}>To Do</button>
    }
    {
      props.task.status === 'in-progress' ?
        <button disabled onClick={() => props.toggleInProgress(props.task)}>In progress</button>
        :
        <button onClick={() => props.toggleInProgress(props.task)}>In progress</button>
    }
    {
      props.task.status === 'completed' ?
        <button disabled onClick={() => props.toggleCompleted(props.task)}>Completed</button>
        :
        <button onClick={() => props.toggleCompleted(props.task)}>Completed</button>
    }
  </div>
)

export default connect(
  () => ({}),
  dispatch => ({
    toggleToDo: (task) => dispatch(toggleToDo(task)),
    toggleInProgress: (task) => dispatch(toggleInProgress(task)),
    toggleCompleted: (task) => dispatch(toggleCompleted(task))
  })
)(Buttons)