import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik, Form, FormikProvider } from 'formik'
import { Route, useNavigate } from 'react-router-dom'
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material'
import { LoadingButton } from '@mui/lab'
// component
import Iconify from '../Iconify'
import {signup} from '../../../Api/signup'
// ----------------------------------------------------------------------

export default function RegisterForm(props) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last name required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      signup(formik.values.email,formik.values.password,formik.values.firstName+" "+formik.values.lastName);
      // passing props to the next page and navigate to the next page
      // go to register page
      const obj={name:formik.values.firstName+" "+formik.values.lastName,email:formik.values.email};
  
      navigate('/register-step-2', { state: { obj } });
    },
  })

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik

  return (
    <FormikProvider value={formik}>
      <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label='First name'
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label='Last name'
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete='username'
            type='email'
            label='Email address'
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete='current-password'
            type={showPassword ? 'text' : 'password'}
            label='Password'
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify
                      icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size='large'
            type='submit'
            variant='outlined'
            loading={isSubmitting}>
            Next Step
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  )
}
