import React, { useEffect, useState } from 'react'

import './register.css'
import Wrapper from '../../styles/styled-component/RegisterPage/RegisterPage'
import { Logo, FormRow, Alert } from '../../components'

import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'

const intialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
  // showAlert: false
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(intialState)

  // global state and useNavigate
  const { isLoading, showAlert, displayAlert } = useAppContext()
  // console.log(state)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  // const { user,displayAlert } = useAppContext()

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    // console.log(e.target.value.name)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    // console.log(e.target)
    const { name, email, password, isMember } = values
    // console.log(e.target.value.name)
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }

  useEffect(() => {
    // if (user) {
    //   setTimeout(() => {
    //     navigate('/')
    //   }, 3000)
    // }
    // }, [user, navigate])
  }, [])

  return (
    <Wrapper className='full-page'>
      {/* <h2>Register</h2> */}

      <form className='form' onSubmit={onSubmit}>
        <Logo />
        {/* <h3>Register</h3> */}
        {/* <h3>{values.isMember ? 'Login' : 'Register'}</h3> */}
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button className='btn btn-block'>submit</button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
