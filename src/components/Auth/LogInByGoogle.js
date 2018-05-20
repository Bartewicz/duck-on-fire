import React from 'react'
import { RaisedButton } from 'material-ui'

const LogInByGoogle = (props) => (
  <RaisedButton
    label={'Log in by Google!'}
    secondary={true}
    onClick={props.onLogInHandler}
  />
)

export default LogInByGoogle