import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { createTheme } from '@mui/material/styles'
import { deepOrange, indigo } from '@mui/material/colors'
import { CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: deepOrange,
    background: {
      default: '#eff3f6',
    },
    shape: {
      borderRadius: 10,
    },
  },
})

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth='lg'
          sx={{
            display: 'grid',
            placeItems: 'center',
            fontFamily: '"Poppins"',
            pb: 5,
          }}>
          <Navbar />
          <Home />
        </Container>
      </ThemeProvider>
    </>
  )
}
