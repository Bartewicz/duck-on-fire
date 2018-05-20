import React from 'react'
// React-Redux
import { connect } from 'react-redux'
// Reducer
import { deleteTaskFromFirebase } from '../../state/todos'
// Components
import AddTask from './AddTask'
// Material-ui
import PaperRefined from '../UI/PaperRefined'
import { TextField, RaisedButton, IconButton } from 'material-ui'
import Power from 'material-ui/svg-icons/action/power-settings-new'

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
                  {task.header}
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
    tasks: state.todos.tasks
  }),
  dispatch => ({
    onTaskDelete: (key) => dispatch(deleteTaskFromFirebase(key))
  })
)(ToDo)