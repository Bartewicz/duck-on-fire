import React from 'react'
import { connect } from 'react-redux'
import { logInByGoogle } from '../../state/auth'
import AppBar from '../AppBar'
import PaperRefined from '../UI/PaperRefined'
import LogInByGoogle from './LogInByGoogle'

const styles = {
  wrapper: {
    maxWidth: '300px',
    margin: '0 auto',
    textAlign: 'center'
  }
}

const Auth = (props) => (
  <div>
    {
      props.isUserLoggedIn ?
        props.children
        :
        <div>
          <AppBar />
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
        </div>
    }
  </div>
)

export default connect(
  state => ({
    isUserLoggedIn: state.auth.isLoggedIn
  }),
  dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle()),
  })
)(Auth)