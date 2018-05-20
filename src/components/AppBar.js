import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../state/auth'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

export default connect(
  () => ({}),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(
  (props) => (
    <div>
      <AppBar
        iconElementRight={<IconButton><NavigationClose /></IconButton>}
        onRightIconButtonClick={props.logOut}
      />
    </div>
  )
)