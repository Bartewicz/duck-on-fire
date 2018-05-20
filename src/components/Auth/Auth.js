import React from 'react'
import { connect } from 'react-redux'
import { logInByGoogle } from '../../state/auth'
import LogInByGoogle from './LogInByGoogle'
import PaperRefined from '../UI/PaperRefined'

const styles = {
  wrapper: {
    maxWidth: '300px',
    margin: '0 auto',
    textAlign: 'center'
  }
}

export default connect(
  state => ({
    isUserLoggedIn: state.auth.isLoggedIn
  }),
  dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle()),
  })
)(
  (props) => (
    <div>
      {
        props.isUserLoggedIn ?
          props.children
          :
          <div style={styles.wrapper}>
            <PaperRefined centered>
            <h3>welcome to</h3>
            <h3>DUCK ON FIRE</h3>
            <h3>ToDo List</h3>
              <LogInByGoogle
                onLogInClick={props.logInByGoogle}
              />
            </PaperRefined>
          </div>
      }
    </div>
  )
)