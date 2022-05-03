import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useFormik , handleChange ,handleSubmit} from 'formik';
import *  as Yup from 'yup'
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const Form = () => {
 const navigate= useNavigate()
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  })
   const formik = useFormik({
     initialValues:{
       email:"",
       password:""
     },
     validationSchema,
     onSubmit:(data) => {
      const login = data
      const getdata  = JSON.parse(localStorage.getItem("userInfo"))
      if(login.email != getdata.email || login.password != getdata.password)
      {
        return Swal.fire("Invalid Details",<h3></h3>,"warning")
      }
    const userData = {...getdata,isLogedIn:true}
      localStorage.getItem("userInfo",JSON.stringify(userData)) 
      Swal.fire(`Welcome ${getdata.firstname}`,<h3></h3>,"success") 
      navigate("profile")   
     },
   })
  return (
    <div>
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={formik.handleSubmit}
        >
          <Typography component="h1" variant="h4">
            Log In
          </Typography>
          <Box component="form" sx={{ mt: 1 , width:"30%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <p className='error'>{formik.errors.email ? formik.errors.email: null}</p>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <p className='error'>{formik.errors.password ? formik.errors.password: null}</p>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onSubmit={formik.handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="signin" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
    </div>
  )
}

export default Form;
