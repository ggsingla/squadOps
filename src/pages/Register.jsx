import { Link as RouterLink } from 'react-router-dom'
// material
import { styled } from '@mui/material/styles'
import { Box, Link, Container, Typography } from '@mui/material'

// components
import Page from '../components/Onboarding/Page'
import { RegisterForm } from '../components/Onboarding/register'

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const ContentStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}))

const HeaderStyle = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}))

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title='Register'>
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant='h5' sx={{ fontWeight: '500' }} gutterBottom>
              <Typography
                component='span'
                variant='h3'
                color='primary'
                sx={{ fontWeight: 'bold' }}>
                1
              </Typography>
              /2
            </Typography>
            <Typography variant='h4' gutterBottom>
              Get Started
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              To ace your next hackathon, create your account.
            </Typography>
          </Box>

          <RegisterForm />
          <HeaderStyle>
            Already have an account? &nbsp;
            <Link
              underline='none'
              variant='body1'
              fontWeight={600}
              component={RouterLink}
              to='/'>
              Login
            </Link>
          </HeaderStyle>
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}
