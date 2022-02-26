import { Link, Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { indigo } from '@mui/material/colors'
import { Translate } from '@mui/icons-material'

function stringToColor(string) {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  }
}

const useStyles = makeStyles({
  selected: {
    fontWeight: 'bold',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '0',
      width: '60%',
      height: '4px',
      backgroundColor: indigo[500],
      borderRadius: '2px',
    },
  },
})

export default function Navbar(props) {
  const classes = useStyles(props)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 3,
          width: '100%',
        }}>
        <Box>
          <Stack direction='row' spacing={2}>
            <Link
              underline='none'
              color='text.primary'
              className={classes.selected}
              sx={{ fontSize: '1.125rem' }}>
              Home
            </Link>
            <Link
              sx={{ fontSize: '1.125rem' }}
              underline='none'
              color='text.primary'>
              My Hackathons
            </Link>
          </Stack>
        </Box>

        <Stack
          direction='row'
          sx={{ display: 'flex', alignItems: 'center' }}
          spacing={2}>
          <NotificationsNoneOutlinedIcon color='inherit' />
          <Avatar
            sx={{ height: 40, width: 40 }}
            {...stringAvatar('Aditya Gupta')}
          />
        </Stack>
      </Box>
    </>
  )
}
