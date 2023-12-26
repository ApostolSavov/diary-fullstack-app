import { createTheme } from '@mui/material'
import { colors } from 'app/uiVars'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors['primary-light'],
      dark: colors['primary-dark']
    },
    secondary: {
      main: colors.secondary,
      light: colors['secondary-light'],
      dark: colors['secondary-dark']
    }
  }
})

export default theme