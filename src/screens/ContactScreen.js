import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Image } from 'react-bootstrap'
import homeSnapShot from '../resources/images/home_snap_shot.png'
import '../resources/styles/contact.css'

const ContactScreen = () => {
  return (
    <>
      <Row className='abs centered max-height max-width margin-auto'>
        <div className='margin-auto abs centered max-height max-width'>
          <Image
            className='max-width max-height img-fluid img-blur'
            src={homeSnapShot}
            alt=''
          />
        </div>
        <Link to={`/`} className='back-btn btn abs btn-light flex p-2'>
          <i className='fas fa-arrow-right margin-auto'></i>
        </Link>
        <div className='contact-form centered-right  margin-auto abs flex flex-column justify-content-center align-items-center'>
          <p
            className='text-center text-white mt-3 mb-5'
            style={{ fontSize: '20px' }}>
            Hey, we are still in the work, <br /> But you can send us a message.
          </p>
          <Form className='text-white form flex flex-column justify-content-center'>
            <Form.Group
              controlId='firstname'
              style={{ zIndex: '10 !important' }}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your First Name'
                className='br-6'></Form.Control>
            </Form.Group>
            <Form.Group controlId='lastname'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your Last Name'
                className='br-6'></Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your Email Address'
                className='br-6'></Form.Control>
            </Form.Group>
            <Form.Group controlId='message'>
              <Form.Label>Tell us what you need help with</Form.Label>
              <Form.Control
                as='textarea'
                type='email'
                rows={5}
                placeholder='Enter a Topic like "Channel Problem"'
                className='br-6'></Form.Control>
            </Form.Group>

            <Button type='submit' className='bg-btn-blue contact-send-btn'>
              send now
            </Button>
          </Form>
        </div>
      </Row>
    </>
  )
}

export default ContactScreen
