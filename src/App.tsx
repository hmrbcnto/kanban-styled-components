import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
