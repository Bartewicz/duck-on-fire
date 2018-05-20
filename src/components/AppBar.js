import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../state/auth'
import logo from '../logo.gif'
import IconButton from 'material-ui/IconButton'
import Power from 'material-ui/svg-icons/action/power-settings-new'

const styles = {
  mediumIcon: {
    color: 'white',
    width: 48,
    height: 48
  },
  medium: {
    width: 72,
    height: 72
  }
}

const AppBar = (props) => (
  <div className={'appbar'}>
    <div>
      <img className={'logo'} src={logo} alt={'Logo'} />
      <span className={'brand'}>
        Duck on fire
      </span>
    </div>
    {
      props.logged ?
        <IconButton
          onClick={props.logOut}
          iconStyle={styles.mediumIcon}
          style={styles.medium}
        >
          <Power />
        </IconButton>
        :
        null
    }
  </div>
)

export default connect(
  () => ({}),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(AppBar)