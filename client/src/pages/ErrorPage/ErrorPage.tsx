import React from 'react'
import Wrapper from '../../styles/styled-component/ErrorPage/ErrorPage'
import img from '../../assets/images/not-found.svg'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='Error page not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}
