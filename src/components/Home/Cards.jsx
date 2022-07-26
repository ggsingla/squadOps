import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid, Link, Paper, Stack } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import { green } from '@mui/material/colors'
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getId,getTeam} from '../../State/Actions/team'
import { useDispatch } from 'react-redux'
const bull = (
  <Box
    component='span'
    sx={{
      display: 'inline-block',
      mx: '2px',
      transform: 'scale(1.5)',
      color: green[500],
    }}>
    •
  </Box>
)

function HackathonCard({ hackathon }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (id) => {
    dispatch(getId(id));
    navigate('/new');
  }
  
  const handleSubmit1 = (id) => {
    dispatch(getTeam({id:id}));
    navigate('/find-team');
  }

  return (
    <Grid
      sx={{
        mt: 4,
      }}
      item
      xs={12}
      sm={6}
      md={4}>
      <Card
        elevation={10}
        sx={{ borderRadius: 2, background: '#fff', p: '1em' }}>
        <CardContent>
          <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
            <Typography
              variant='h5'
              fontWeight={600}
              color='text.primary'
              component='div'>
              {hackathon.name}
            </Typography>
            <Link href="">
              <LinkIcon />
            </Link>
          </Stack>
          <Stack
            direction='row'
            spacing={1}
            sx={{ marginBlock: '1em', justifyContent: 'space-between' }}>
            <Stack>
              <Typography
                variant='button'
                fontWeight={600}
                color='text.secondary'>
                Starts
              </Typography>
              <Typography variant='body1'>{hackathon.startDate}</Typography>
            </Stack>
            <Stack>
              <Typography
                variant='button'
                fontWeight={600}
                color='text.secondary'>
                Ends
              </Typography>
              <Typography variant='body1'>{hackathon.endDate}</Typography>
            </Stack>
          </Stack>
          <Stack
            direction='row'
            spacing={1}
            sx={{ marginBlock: '1em', justifyContent: 'space-between' }}>
            <Stack>
              <Typography
                variant='button'
                fontWeight={600}
                color='text.secondary'>
                Venue
              </Typography>
              <Typography variant='body1'>
                {hackathon.venue} {bull}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Button variant='contained' sx={{ width: '100%' }}
              onClick={()=>handleSubmit1(hackathon.id)}>
              Join a Team
            </Button>
            <Button variant='outlined' sx={{ width: '100%' }} onClick={()=>handleSubmit(hackathon.id)}>
              Complete your Team
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  )
}
// sample object needed from API:
const Hackathon = {
  name: 'Hackmol 3.0',
  id: 1,
  date: {
    start: 'Feb 25,2022',
    end: 'Feb 25,2022',
  },
  place: 'Online',
  website: 'https://hackmol3.tech',
}

export default function HackathonCards() {
  const [hackathon, setHackathon] = React.useState([]);

  const hack=useSelector(state=>state.hackthon);
  
  hack.then(data=>{
    setHackathon(data);
  });
  
 

  return (
    <Grid container spacing={4}>
      {hackathon.map((hackathon, index) => (
 
        <HackathonCard hackathon={hackathon} key={index} />
      ))}
      
    </Grid>
  )
}