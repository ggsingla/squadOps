import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { Button, Grid, InputBase, Stack } from '@mui/material'
import { grey, indigo } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  width: 'auto',
  borderRadius: 4,
  boxShadow: 20,
  display: 'flex',
  overflow: 'hidden',
}

// for input

const Message = styled('div')(({ theme }) => ({
  border: `1px solid ${grey[400]}`,
  backgroundColor: grey[50],
  '&:hover, &:focus-within': {
    backgroundColor: grey[200],
    boxShadow: `0 0 0 2px ${indigo[500]}`,
  },
  width: '100%',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'text.primary',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: '1em',
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}))

export default function TeamModal({ team, open, handleClose }) {
  const [submitted, setSubmited] = useState(false)

  const showThanks = () => {
    setSubmited(true)
  }
  const showForm = () => {
    setSubmited(false)
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        keepMounted
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Stack spacing={3} sx={{ p: 4 }} id='left'>
              <Stack spacing={2} id='header'>
                <Typography variant='h4' fontWeight='fontWeightBold'>
                  {team.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {team.desp}
                </Typography>
              </Stack>
              <Stack spacing={1} id='members'>
                <Typography
                  variant='button'
                  fontSize={16}
                  color='text.secondary'
                  fontWeight='fontWeightBold'>
                  Members
                </Typography>
                <Grid container>
                  {team.members.map((member) => (
                    <Grid item xs={6}>
                      <Typography variant='subtitle1' fontWeight={500}>
                        {member}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack spacing={1} id='requirements'>
                <Typography
                  variant='button'
                  fontSize={16}
                  color='text.secondary'
                  fontWeight='fontWeightBold'>
                  Requirements
                </Typography>
                <Typography
                  variant='subtitle1'
                  fontWeight={500}
                  color='primary'>
                  {team.required}
                </Typography>
              </Stack>
            </Stack>
            {submitted ? (
              <ModalThanks showForm={showForm} />
            ) : (
              <ModalRight showThanks={showThanks} />
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

function ModalRight({ showThanks }) {
  const [message, setMessage] = useState('')
  return (
    <Stack
      spacing={3}
      justifyContent='space-between'
      sx={{
        bgcolor: 'hsla(231, 99%, 69%, 1)',
        p: 4,

        color: 'white',
        minWidth: '40%',
      }}
      id='right'>
      <Typography variant='h4' fontWeight='fontWeightBold'>
        Are you Interested ?
      </Typography>
      <Stack spacing={1}>
        <Typography variant='subtitle1' fontWeight={500}>
          Message*
        </Typography>

        <Message sx={{ borderRadius: 2 }}>
          <StyledInputBase
            multiline
            rows={6}
            placeholder='Write your message here . . .'
            inputProps={{ 'aria-label': 'message' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Message>
        <Button
          onClick={showThanks}
          variant='contained'
          sx={{
            width: 'fit-content',
          }}
          disabled={message.length === 0}>
          Reach Out
        </Button>
      </Stack>
    </Stack>
  )
}

function ModalThanks({ showForm }) {
  return (
    <Stack
      spacing={3}
      justifyContent='space-between'
      sx={{
        bgcolor: 'hsla(231, 99%, 69%, 1)',
        p: 4,

        color: 'white',
        minWidth: '40%',
      }}
      id='right'>
      <Stack spacing={3}>
        <Typography variant='h4' fontWeight='fontWeightBold'>
          Thanks for the response
        </Typography>
        <Stack spacing={1}>
          <Typography variant='subtitle1' fontWeight={500}>
            The Team Leader will contact you shortly on your social handles
          </Typography>
          <Typography variant='subtitle1' color={grey[300]}>
            Sorry for inconvience the chat support is currently is under
            development.
          </Typography>
        </Stack>
      </Stack>

      <Button
        onClick={showForm}
        variant='contained'
        color='error'
        sx={{
          width: 'fit-content',
        }}>
        Withdraw Yourself
      </Button>
    </Stack>
  )
}
