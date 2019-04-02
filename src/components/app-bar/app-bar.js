import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1
  },
  barWrapper: {
    maxWidth: '940px',
    width: '100%',
    margin: 'auto'
  }
}

const AppBarComponent = ({ classes }) => {
  return (
    <div>
      <div className={ classes.root }>
        <AppBar position="static" color="secondary">
          <Toolbar className={ classes.barWrapper }>
            <Typography variant="h6" color="primary">
              Veggy
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppBarComponent)
