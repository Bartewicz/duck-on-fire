import React from 'react'
import ReactDOM from 'react-dom'
// Redux
import { Provider } from 'react-redux'
import store from './store'
// Components
import './index.css'
import App from './App'
import Auth from './components/Auth'
// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Auth>
        <App />
      </Auth>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'))