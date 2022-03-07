import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik, Form, FormikProvider } from 'formik'
import { useNavigate,useLocation } from 'react-router-dom'
// material

import {
  Stack,
  TextField,
  InputAdornment,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
// components
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ApartmentIcon from '@mui/icons-material/Apartment'
import GitHubIcon from '@mui/icons-material/GitHub'
// ----------------------------------------------------------------------
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {profile} from '../../../State/Actions/auth'

export default function RegisterForm2(props) {
  const dispatch = useDispatch();
  const [reg,setreg]=useState({});
  const det = useSelector((state) => state.user);
  det.then((data)=>{
    setreg(data);
  });
  console.log(reg);
  const [state, setState] = useState([]);
  const handleChange = (event) => {

    var isChecked = event.target.checked;
    var value = event.target.name;
    if (isChecked) {
      setState((state) => [...state, value]);
    } 
    else {
      setState((state) => state.filter((s) => s !== value));
    }
    console.log(state);
  };
  
  const navigate = useNavigate()
  const RegisterSchema = Yup.object().shape({
    collegeName: Yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required('College name required'),
    linkedInURL: Yup.string().url('Invalid URL'),
    githubURL: Yup.string()
      .url('Invalid URL')
      .required('Github URL is required'),
    DiscordId: Yup.string().min(5, 'Invalid Discord ID').required('Discord ID is required'),

  })

  const formik = useFormik({
    initialValues: {
      collegeName: '',
      linkedInURL: '',
      githubURL: '',
      DiscordId: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      
      console.log(state);
      dispatch(profile({
        email:reg.email,
        edu:formik.values.collegeName,
        socialLinks:{'LinkedIn':formik.values.linkedInURL,'Github':formik.values.githubURL},
        skills:state,
        discordId:formik.values.DiscordId,
      }));
      navigate('/home');
    },
  })

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik
 
  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label='College Name'
            placeholder='College Name'
            {...getFieldProps('collegeName')}
            error={Boolean(touched.collegeName && errors.collegeName)}
            helperText={touched.collegeName && errors.collegeName}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <ApartmentIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onClick={handleChange}  name ="Newbie"/>}
              label='Newbie'
            />
            <FormControlLabel
              control={<Checkbox onClick={handleChange} name="Backend Developer" />}
              label='Backend Developer'
            />
            <FormControlLabel
              control={<Checkbox onClick={handleChange} name="Frontend Developer" />}
              label='Frontend Developer'
            />
            <FormControlLabel
              control={<Checkbox onClick={handleChange} name = "Android Developer" />}
              label='Android Developer'
            />
            <FormControlLabel control={<Checkbox onClick={handleChange} name='ML/AI Developer' />} label='ML/AI Developer' />
            <FormControlLabel control={<Checkbox onClick={handleChange} name= 'UI/UX Designer'/>} label='UI/UX Designer' />
            <FormControlLabel control={<Checkbox onClick={handleChange} name= 'Cloud Computing' />} label='Cloud Computing' />
            <FormControlLabel
              control={<Checkbox />}
              label='Blockchain Developer'
            />
          </FormGroup>
          <TextField
            fullWidth
            label='LinkedIn Profile'
            placeholder='LinkedIn Profile URL'
            {...getFieldProps('linkedInURL')}
            error={Boolean(touched.linkedInURL && errors.linkedInURL)}
            helperText={touched.linkedInURL && errors.linkedInURL}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LinkedInIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label='Github Profile'
            placeholder='Github Profile URL'
            {...getFieldProps('githubURL')}
            error={Boolean(touched.githubURL && errors.githubURL)}
            helperText={touched.githubURL && errors.githubURL}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <GitHubIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label='Discord Id'
            placeholder='Discord Id'
            {...getFieldProps('DiscordId')}
            error={Boolean(touched.DiscordId && errors.DiscordId)}
            helperText={touched.DiscordId && errors.DiscordId}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <GitHubIcon />
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  )
}
