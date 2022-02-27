import * as Yup from 'yup'
import { useState } from 'react'
import { Link as RouterLink, useNavigate,useLocation} from 'react-router-dom'
import { useFormik, Form, FormikProvider } from 'formik'
// material
import {addTeam} from '../../../Api/teams'
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
// ----------------------------------------------------------------------

export default function TeamForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long')
      .required('Name is required'),
  })
  const [member, setMember] = useState('')
  const [members, setMembers] = useState([])
  const handleMemberSubmit = (e) => {
    setMembers([...members, member])
    setMember('')
  }
  
  const [skill, setSkill] = useState('')
  const [skills, setSkills] = useState([])
  const handleSkillSubmit = (e) => {
    setSkills([...skills, skill])
    setSkill('')
  }
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      const team={
        teamname:formik.values.name,
        leadername:"chirag",
        leaderemail:"chirag@gmail.com",
        completed:false,
        teamsize:members.length,
        members:members,
        requirements:skills,
        hackathonid: "867730b1-024d-4caf-9a66-8be3483a17d3",
        hackathonname:"hackmol 3",

      }
      console.log(team);
      addTeam(team);
      alert('Team added successfully');
      navigate('/home', { replace: true })

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
                type='text'
                label='New Member'></TextField>

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
            type='text'
            label='Description'></TextField>

          <Stack spacing={2}>
            {skills.map((single) => (
              <Typography variant='body1'>{single}</Typography>
            ))}

            <Stack direction='row' spacing={2}>
              <TextField
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                fullWidth
                autoComplete='off'
                type='text'
                label='Add Skill'></TextField>

              <IconButton onClick={handleSkillSubmit}>
                <AddCircleIcon />
              </IconButton>
            </Stack>
          </Stack>
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
