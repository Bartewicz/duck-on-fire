import React from 'react'
// React-Redux
import { connect } from 'react-redux'
import { initTasksSync } from './state/todos'
// Components
import AppBar from './components/AppBar'
import ToDo from './components/ToDo'
import './App.css'

class App extends React.Component {

  render() {
    return (
      <div>
        <AppBar logged />
          <ToDo />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  dispatch(initTasksSync())
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)