import React from 'react'
import { withStyles } from '@material-ui/core/styles/index'

import AppBarComponent from './components/app-bar/app-bar'
import List from './components/list/list'

import './app.css'

const styles = {
  bodyWrapper: {
    backgroundColor: '#f5f5f5'
  },
  listWrapper: {
    maxWidth: '940px',
    margin: 'auto',
    padding: '25px 0'
  }
}

class App extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <AppBarComponent />
        <div className={ classes.bodyWrapper }>
          <div className={ classes.listWrapper }>
            <List />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
