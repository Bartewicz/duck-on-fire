import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../state/auth'
import IconButton from 'material-ui/IconButton'
import Power from 'material-ui/svg-icons/action/power-settings-new'

const styles = {
  appbar: {
    display: 'flex',
    justifyContent: 'space-between',
    itemsAlign: 'center',
    width: '100vw',
    boxSizing: 'border-box',
    background: '#808080',
    padding: 12
  },
  brand: {
    fontSize: '48px',
    color: 'white',
    padding: '12px'
  },
  mediumIcon: {
    color: 'white',
    width: 48,
    height: 48
  },
  medium: {
    width: 72,
    height: 72,
    padding: 12
  }
}

export default connect(
  () => ({}),
  dispatch => ({
    logOut: () => dispatch(logOut())
  })
)(
  (props) => (
    <div style={styles.appbar}>
      <span style={styles.brand}>
        Duck on fire
      </span>
      <IconButton
        iconStyle={styles.mediumIcon}
        style={styles.medium}
        onClick={props.logOut}
      >
        <Power />
      </IconButton>
    </div>
  )
)