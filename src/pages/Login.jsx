import { Link as RouterLink } from 'react-router-dom'
// material
import { styled } from '@mui/material/styles'
import { Card, Stack, Link, Container, Typography, Box } from '@mui/material'
// layouts
import AuthLayout from '../components/Onboarding/AuthLayout'
// components
import Page from '../components/Onboarding/Page'
import { LoginForm } from '../components/Onboarding/login'

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: '480',
  margin: 'auto',
  display: 'flex',
  minHeight: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}))

const HeaderStyle = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}))

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title='Login'>
      <Container maxWidth='sm'>
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant='h4' gutterBottom>
              Sign in to Squadops
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Enter your details below.
            </Typography>
          </Stack>

          <LoginForm />

          <HeaderStyle>
            Don't have an account? &nbsp;
            <Link
              underline='none'
              variant='body1'
              fontWeight={600}
              component={RouterLink}
              to='/register'>
              Get started
            </Link>
          </HeaderStyle>
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}
