import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Reducer
import { deleteTaskFromFirebase, toggleToDo, toggleInProgress, toggleCompleted } from '../../state/todos'
// Components
import AddTask from './AddTask'
// Material-ui
import PaperRefined from '../UI/PaperRefined'
import { RaisedButton } from 'material-ui'
import Buttons from './Buttons';

const ToDo = (props) => (
  <div>
    <AddTask />
    <section>
      {
        props.tasks.length ?
          props.tasks.map((task) => (
            <PaperRefined key={task.key}>
              <div className={'task-wrapper'}>
                <h2 className={'task-title'}>
                  {
                    task.status === 'completed' ?
                      <strike>{task.header}</strike>
                      :
                      task.header
                  }
                </h2>
                <RaisedButton
                  secondary={true}
                  label={<b>Delete</b>}
                  onClick={() => props.onTaskDelete(task.key)}
                />
              </div>
              <hr />
              <div>
                <p>
                  {
                    task.status === 'completed' ?
                      <strike>{task.description}</strike>
                      :
                      task.description
                  }
                </p>
              </div>
              <Buttons task={task} />
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
    tasks: state.todos.tasks
  }),
  dispatch => ({
    onTaskDelete: (key) => dispatch(deleteTaskFromFirebase(key)),
    toggleToDo: (task) => dispatch(toggleToDo(task)),
    toggleInProgress: (task) => dispatch(toggleInProgress(task)),
    toggleCompleted: (task) => dispatch(toggleCompleted(task))
  })
)(ToDo)