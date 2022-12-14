import { ThemeProvider } from 'styled-components'
// import { AppContextProvider } from './contexts/app'
import Router from './routing'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from './server'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        {/* <AppContextProvider> */}
        <Router />
        {/* </AppContextProvider> */}
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
