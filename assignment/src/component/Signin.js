import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Signin = () => {
 const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    pno: Yup.number().required( "Phone Number is required").min(10,"Mobile Number it should 10 numbers"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      pno: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {  
      const savedata= data
      localStorage.setItem("userInfo",JSON.stringify(savedata))
      Swal.fire(`Thank You For SignIn ${data.firstname}`,<h3></h3>,"success")
      navigate("/")
    },
  });

  return (
    <div>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={formik.handleSubmit}
      >
        <Typography component="h1" variant="h4">
          Sign In
        </Typography>
        <Box component="form"  sx={{ mt: 1 , width:'30%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="Firstname"
            name="firstname"
            autoComplete="firstname"
            autoCapitalize="name"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <p className="error">
            {formik.errors.firstname ? formik.errors.firstname : null}
          </p>

          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Lastname"
            name="lastname"
            autoComplete="lastname"
            autoCapitalize="name"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <p className="error">
            {formik.errors.lastname ? formik.errors.lastname : null}
          </p>

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
          <p className="error">
            {formik.errors.email ? formik.errors.email : null}
          </p>

          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            id="phone"
            label="Phone Number"
            name="pno"
            autoComplete="number"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.pno}
          />
          <p className="error">
            {formik.errors.pno ? formik.errors.pno : null}
          </p>
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
          <p className="error">
            {formik.errors.password ? formik.errors.password : null}
          </p>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
         
        </Box>
      </Box>
    </div>
  );
};

export default Signin;
