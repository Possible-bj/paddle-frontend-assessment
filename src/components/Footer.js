import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <Container className='mt-5 bg-transparent rel pt-5'>
        <Row>
          <Col className='text-center rel py-3'>
            <Row>
              <Col md={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
                <Row className='sm-box'>
                  <Col
                    md={{ span: 2, offset: 1 }}
                    xs={{ span: 2, offset: 1 }}
                    className='youtube-sm'>
                    {' '}
                    <i className='fab fa-youtube fa-2x'></i>
                  </Col>
                  <Col md={2} xs={2} className='facebook-sm'>
                    {' '}
                    <i className='fab fa-facebook-square fa-2x'></i>
                  </Col>
                  <Col md={2} xs={2} className='linkedin-sm'>
                    {' '}
                    <i className='fab fa-linkedin fa-2x'></i>
                  </Col>
                  <Col md={2} xs={2} className='instagram-sm'>
                    {' '}
                    <i className='fab fa-instagram fa-2x'></i>
                  </Col>
                  <Col md={2} xs={2} className='twitter-sm'>
                    {' '}
                    <i className='fab fa-twitter fa-2x'></i>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className='tnc'>
              <Col md={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
                <Row className='mt-1 mb-3'>
                  <Col md={{ span: 4, offset: 2 }} xs={6} className='terms'>
                    Terms of Service
                  </Col>
                  <Col md={4} xs={6} className='privacy-policy'>
                    Privacy Policy
                  </Col>
                </Row>
                <div>
                  Copyright {year} @ Paddle Technogies. All Rights Reserved.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
