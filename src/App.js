import React from 'react'
// React-Redux
import { connect } from 'react-redux'
import { initTasksSync } from './state/todos'
// Components
import AppBar from './components/AppBar'
import ToDo from './components/ToDo'
import './App.css'

const App = () => (
  <div>
    <AppBar logged />
    <ToDo />
  </div>
)

export default connect(
  state => ({}),
  dispatch => {
    dispatch(initTasksSync())
    return {}
  }
)(App)
