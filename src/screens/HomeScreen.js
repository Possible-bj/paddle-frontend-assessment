import React from 'react'
import { Button, Card, Col, FormControl, Row } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className='text-center'>
            something awesome is <br /> coming soon{' '}
          </h1>
          <div>
            <p>
              Your all-in-one affiliate marketing tracking software,{' '}
              <strong>track,</strong> <strong>automate</strong> and{' '}
              <strong>optimise</strong> your campaigns.
            </p>
          </div>
          <Row>
            <Col md={2} xs={2}>
              <Card>
                <div>7</div>

                <div>Days</div>
              </Card>
            </Col>
            <Col md={2} xs={2}>
              <Card>
                <div>24</div>

                <div>Hours</div>
              </Card>
            </Col>
            <Col md={2} xs={2}>
              <Card>
                <div>54</div>

                <div>Minutes</div>
              </Card>
            </Col>
            <Col md={2} xs={2}>
              <Card>
                <div>11</div>

                <div>Seconds</div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={6}>
              <Row>
                <Col>
                  <FormControl
                    as='input'
                    type='text'
                    placeholder='First Name'
                  />
                </Col>
                <Col>
                  <FormControl as='input' type='text' placeholder='Last Name' />
                </Col>
              </Row>
            </Col>
            <Col md={4} xs={6}>
              <FormControl
                as='input'
                type='text'
                placeholder='Enter your email address'
              />
              <Button bg='primary' variant='primary'>
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
