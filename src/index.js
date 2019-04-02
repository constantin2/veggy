import React  from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import App from './app'
import { themeConfig } from './theme'

ReactDOM.render(
  <MuiThemeProvider theme={ themeConfig }>
    <App />
  </MuiThemeProvider>
    ,document.getElementById('root')
)
