import React, { useEffect, useState } from 'react'
import Wrapper from '../../styles/styled-component/RegisterPage/RegisterPage'
import { Logo, FormRow } from '../../components'

import { useNavigate } from 'react-router-dom'

const intialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(intialState)
  // const { user,displayAlert } = useAppContext()

  const onSubmit = (e: any) => {
    e.preventDefault()

    const { name, email, password, isMember } = values
    console.log(e.target.value.name)
    if (!email || !password || !isMember) {
      // displayAlert()
      return
    }
  }
  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    console.log(e.target.value.name)
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
        <h3>Register</h3>
        {/* name input */}
        <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
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
          className='form-input'
        />
        <button className='btn btn-block'>submit</button>
      </form>
    </Wrapper>
  )
}

export default Register
