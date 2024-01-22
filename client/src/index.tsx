import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import App from 'app/App'
import { store } from 'app/store'
import { Provider as ReduxProvider } from 'react-redux'
import './styles.css'
import theme from './theme'
import NotifContainer from 'app/NotifContainer'

const rootEl = document.getElementById('root') as HTMLElement
const root = createRoot(rootEl)
root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <App />
        <NotifContainer />
      </ReduxProvider>
    </ThemeProvider>
  </Router>
)
