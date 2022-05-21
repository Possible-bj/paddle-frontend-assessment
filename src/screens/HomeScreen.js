import React from 'react'
import { Button, Col, FormControl, Row } from 'react-bootstrap'
import CountDown from '../components/CountDown'

const HomeScreen = () => {
  return (
    <>
      <Row className='mb-5'>
        <Col md={12} xs={12}>
          <h1 className='text-center'>
            something awesome is <br /> coming soon{' '}
          </h1>
          <div className='text-center'>
            <p className='text-white'>
              Your all-in-one affiliate marketing tracking software,{' '}
              <strong>track, automate</strong> and <strong>optimise</strong>{' '}
              your campaigns.
            </p>
          </div>
        </Col>

        <Col md={12} xs={12} className='margin-auto mt-5 mb-5 rel'>
          <CountDown />
        </Col>

        <Col md={12} xs={12}>
          <Row>
            <Col md={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
              <Row>
                <Col md={6} xs={6}>
                  <FormControl
                    as='input'
                    type='text'
                    placeholder='First Name'
                    className='name-input firstname-input bg-transparent'
                  />
                </Col>
                <Col md={6} xs={6}>
                  <FormControl
                    as='input'
                    type='text'
                    placeholder='Last Name'
                    className='name-input lastname-input bg-transparent'
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={12} xs={12}>
          <Row>
            <Col
              md={{ span: 8, offset: 2 }}
              xs={{ span: 10, offset: 1 }}
              className='flex form-box'>
              <FormControl
                as='input'
                type='text'
                placeholder='Enter your email address'
                className='margin-auto abs max-height centered email-input'
              />
              <Button className='margin-auto abs centered-right submit-btn'>
                {' '}
                JOIN THE WAITING LIST
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
