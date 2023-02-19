import React from 'react'
import logo from '../../assets/images/logo.svg'
import main from '../../assets/images/main.svg'
import Link from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`
const ButtonSecond = styled.button`
  background: blue;
  color: white;
  font-size: 1rem;
`

const Landing = () => {
  return (
    <main>
      <Button>Click Me</Button>
      <ButtonSecond>Click Me</ButtonSecond>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
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
    </main>
  )
}

export default Landing
