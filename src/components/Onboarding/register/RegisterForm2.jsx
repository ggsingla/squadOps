import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik, Form, FormikProvider } from 'formik'
import { useNavigate } from 'react-router-dom'
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

export default function RegisterForm2() {
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
  })

  const formik = useFormik({
    initialValues: {
      collegeName: '',
      linkedInURL: '',
      githubURL: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/home', { replace: true })
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
              control={<Checkbox defaultChecked />}
              label='Newbie'
            />
            <FormControlLabel
              control={<Checkbox />}
              label='Backend Developer'
            />
            <FormControlLabel
              control={<Checkbox />}
              label='Frontend Developer'
            />
            <FormControlLabel
              control={<Checkbox />}
              label='Android Developer'
            />
            <FormControlLabel control={<Checkbox />} label='ML/AI Developer' />
            <FormControlLabel control={<Checkbox />} label='UI/UX Designer' />
            <FormControlLabel control={<Checkbox />} label='Cloud Computing' />
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