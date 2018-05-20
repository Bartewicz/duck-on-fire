import React from 'react'
// React-Redux
import { connect } from 'react-redux'
import { initTasksSync } from './state/todos'
// Components
import AppBar from './components/AppBar'
import ToDo from './components/ToDo'

class App extends React.Component {

  render() {
    return (
      <div>
        <AppBar />
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