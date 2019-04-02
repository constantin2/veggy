import { createMuiTheme } from '@material-ui/core/styles';

export const themeConfig = createMuiTheme({
  palette: {
    primary: {
      main: '#077915'
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true
  }
});
