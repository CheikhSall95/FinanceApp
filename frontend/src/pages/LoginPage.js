import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../Register.css';
import { useFormik } from 'formik'
import * as Yup from 'yup'


//Form validation
const formSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  username: Yup.string().required("Username is required"),

});


function LogInPage() {
  const history = useNavigate();

  // formirk form
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: formSchema,
  })

  return (
    <div >
      {/* Err */}
      <div className="formAlert">
        {formik.touched.username && formik.errors.username}<br />
        {formik.touched.password && formik.errors.password}
      </div>
      <div className='registerForm'>

        <h2>Login</h2>

        <form onSubmit={formik.handleSubmit}>
          <div class='user-box'>
            <input
              type='text'
              value={formik.values.username}
              onChange={formik.handleChange('username')}
              onBlur={formik.handleBlur('username')} />
            <label>Username</label>
          </div>
          <div class='user-box'>
            <input type='password'
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')} />
            <label>Password</label>
          </div>
          <button  type='submit'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogInPage

