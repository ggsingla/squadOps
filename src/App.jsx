import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { createTheme } from '@mui/material/styles'
import { deepOrange, indigo } from '@mui/material/colors'
import { ThemeProvider } from '@mui/material'

// importing fonts
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: deepOrange,
    background: {
      default: '#eff3f6',
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
  },
})

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth='lg'
          sx={{
            display: 'grid',
            placeItems: 'center',
            fontFamily: '"Poppins"',
          }}>
          <Navbar />
          <Home />
        </Container>
      </ThemeProvider>
    </>
  )
}
