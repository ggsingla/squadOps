import { Link as RouterLink } from 'react-router-dom'
// material
import { styled } from '@mui/material/styles'
import { Box, Link, Container, Typography } from '@mui/material'

// components
import Page from '../components/Onboarding/Page'
import TeamForm from '../components/Onboarding/new/TeamForm'

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

// ----------------------------------------------------------------------
// get id recieved from the url

export default function NewTeam() {

  return (
    <RootStyle title='New Team'>
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant='h4' gutterBottom>
              Add Details about your team
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              To ace your next hackathon, create your new team.
            </Typography>
          </Box>

          <TeamForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}
