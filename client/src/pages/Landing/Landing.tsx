import React from 'react'
import main from '../../assets/images/main.svg'
import Link from 'react-router-dom'
import './landing.css'
import Wrapper from '../../styles/styled-component/Landing/Landing'

import styled from 'styled-components'

import { Logo } from '../../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt='jobify' className='logo' /> */}
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>Tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          {/* <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link> */}
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
