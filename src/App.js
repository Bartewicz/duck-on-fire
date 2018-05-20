import React from 'react'
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

export default App