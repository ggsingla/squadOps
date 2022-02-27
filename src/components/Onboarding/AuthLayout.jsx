import PropTypes from 'prop-types'
// material
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  width: '100%',
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

AuthLayout.propTypes = {
  children: PropTypes.node,
}

export default function AuthLayout({ children }) {
  return (
    <HeaderStyle>
      <Typography
        variant='body2'
        sx={{
          display: { xs: 'none', sm: 'block' },
          mt: { md: -2 },
        }}>
        {children}
      </Typography>
    </HeaderStyle>
  )
}
