import React from 'react'
import { connect } from 'react-redux'
import { logInByGoogle } from '../../state/auth'
import LogInByGoogle from './LogInByGoogle'
import PaperRefined from '../UI/PaperRefined'

export default connect(
  state => ({
    isUserLoggedIn: state.auth.isLoggedIn
  }),
  dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle())
  })
)(
  (props) => (
    <PaperRefined>
      {
        props.isUserLoggedIn ?
          props.children
          :
          <LogInByGoogle
            onLogInHandler={props.logInByGoogle}
          />
      }
    </PaperRefined>
  )
)