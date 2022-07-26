import * as Yup from 'yup'
import { useState } from 'react'
import { Link as RouterLink, useNavigate,useLocation} from 'react-router-dom'
import { useFormik, Form, FormikProvider } from 'formik'
// material

import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {addTeam} from '../../../State/Actions/team'
// ----------------------------------------------------------------------

export default function TeamForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const TeamSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long')
      .required('Name is required'),
    leaderName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Leader name required'),
    requirements: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Requirements is required'),
    desc: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Description is required'),

  })

  const sel=useSelector(state=>state.user);
  const [Email,setEmail]=useState('');

  sel.then((data)=>{
    setEmail(data.email);
  });
  
  const id=useSelector(state=>state.team);
  const [HackId,setHackId]=useState('');

  
  id.then((data)=>{
    setHackId(data);
  });
  
  const [member, setMember] = useState('')
  const [members, setMembers] = useState([])
  const handleMemberSubmit = (e) => {
    setMembers([...members, member])
    setMember('')
  }
  
  
  const formik = useFormik({
    initialValues: {
      name: '',
      leaderName: '',
      requirements: '',
      desc: '',
    },
    validationSchema: TeamSchema,
    onSubmit: () => {
      const team={
         name:formik.values.name,
         leaderName:formik.values.leaderName,
         members:members,
         hackathonName:HackId.name,
         requirements:formik.values.requirements,
         leaderEmail:Email,
         desc:formik.values.desc,
         hackathonid:HackId.id,
      }
      dispatch(addTeam(team));
      alert('Team added successfully');
      // navigate('/home')
    },
  })
  
  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
  formik
  
  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            type='name'
            label='Team Name'
            {...getFieldProps('name')}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            fullWidth
            multiLine
            rows={4}
            autoComplete='off'
            type='leaderName'
            label='Team Leader Name'
            {...getFieldProps('leaderName')}>
          
            </TextField>

          <Stack spacing={2}>
            {members.map((single) => (
              <Typography variant='body1'>{single}</Typography>
            ))}

            <Stack direction='row' spacing={2}>
              <TextField
                value={member}
                onChange={(e) => setMember(e.target.value)}
                fullWidth
                autoComplete='off'
                type='Members'
                label='New Member'>

                </TextField>

              <IconButton onClick={handleMemberSubmit}>
                <AddCircleIcon />
              </IconButton>
            </Stack>
          </Stack>
          <TextField
            fullWidth
            multiLine
            rows={4}
            autoComplete='off'
            type='requirements'
            label='Requirements'
            {...getFieldProps('requirements')}></TextField>

          <TextField
            fullWidth
            multiLine
            rows={4}
            autoComplete='off'
            type='desc'
            label='Description'
            {...getFieldProps('desc')}></TextField>
          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            loading={isSubmitting}>
            Create
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  )
}
