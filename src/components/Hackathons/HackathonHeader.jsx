import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import { grey, indigo } from '@mui/material/colors'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${grey[400]}`,
  backgroundColor: grey[50],
  boxShadow: '0px 9px 8px 0px #16223314, 0px 6px 3px -4px #16223311',
  '&:hover, &:focus-within': {
    backgroundColor: grey[200],
    boxShadow: `0 0 0 2px ${indigo[500]}`,
  },
  marginRight: theme.spacing(2),
  width: '40ch',
  [theme.breakpoints.up('sm')]: {
    width: '40ch',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'all',
  cursor: 'pointer',
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

export default function HackathonHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        my: 3,
        width: '100%',
        gap: '1em',
      }}>
      <Typography variant='h2' fontWeight={800} color='text.primary'>
        Hackmol 3.0
      </Typography>
      <Typography variant='h6' color='#4B5563'>
        Catch us live on youtube as we give a green flag to a 36 hour long
        virtual madness where more than a thousand people will be showing off
        their coding skills for a massive price pool of more than ₹ 5 lakh
      </Typography>
      <Search sx={{ borderRadius: 6, marginTop: '2em' }}>
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
