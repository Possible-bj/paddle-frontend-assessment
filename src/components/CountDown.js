import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const CountDown = () => {
  return (
    <>
      <Row className='max-width rel margin-auto'>
        <Col
          md={{ span: 6, offset: 3 }}
          xs={12}
          className='countdown margin-auto'>
          <Row className='margin-auto max-width rel flex countdown-box'>
            <Card className='margin-auto max-height countdown-cards'>
              <h1>7</h1>

              <div>Days</div>
            </Card>

            <Card className='margin-auto max-height countdown-cards'>
              <h1>24</h1>

              <div>Hours</div>
            </Card>

            <Card className='margin-auto max-height countdown-cards'>
              <h1>54</h1>

              <div>Minutes</div>
            </Card>

            <Card className='margin-auto max-height countdown-cards'>
              <h1>11</h1>

              <div>Seconds</div>
            </Card>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default CountDown
