import React from 'react'
// , { useState, useEffect }
import { Link } from 'react-router-dom'
// import { Form, Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'


const AboutScreen = () => {
  return (
    <>
      <Link to={`/`} className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>About US</h1>
       

      </FormContainer>
    </>
  )
}

export default AboutScreen
