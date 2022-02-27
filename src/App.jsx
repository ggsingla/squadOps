import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { createTheme } from '@mui/material/styles'
import { deepOrange, grey, indigo } from '@mui/material/colors'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route, Link } from 'react-router-dom'
import Hackathon from './pages/Hackathon'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: indigo,
    secondary: grey,
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
            position: 'initial',
          }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hackathon' element={<Hackathon />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  )
}
