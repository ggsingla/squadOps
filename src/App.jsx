import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { createTheme } from '@mui/material/styles'
import { deepOrange, grey, indigo } from '@mui/material/colors'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route, Link } from 'react-router-dom'
import Hackathon from './pages/Hackathon'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterStep2 from './pages/RegisterStep2'
import NewTeam from './pages/NewTeam'

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
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/hackathon' element={<Hackathon />} />
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/register-step-2' element={<RegisterStep2 />} />
            <Route path='/new' element={<NewTeam />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  )
}
