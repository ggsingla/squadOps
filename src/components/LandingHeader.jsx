import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import { grey, indigo } from '@mui/material/colors'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}))

export default function LandingHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: 'sm',
        marginBlock: '3em',
        gap: '1em',
      }}>
      <Typography variant='h1' fontWeight={800} color='primary'>
        <Box component='span' color='#637BFE'>
          Squad
        </Box>
        ops
      </Typography>
      <Typography
        variant='body1'
        sx={{
          fontSize: '1.5rem',
          lineHeight: '1.5',
          color: '#4B5563',
          textAlign: 'center',
        }}>
        We help you find your future team mates so that you can ace your
        upcoming hackathons
      </Typography>
      <Search sx={{ marginTop: '2em' }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: grey[700] }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  )
}
