import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BottomAbout from '../components/BottomAbout'
import CenterAbout from '../components/CenterAbout'
import TopAbout from '../components/TopAbout'
import '../resources/styles/about.css'

const AboutScreen = () => {
  return (
    <>
      <Row className='max-width margin-auto rel'>
        <Col md={12} xs={12} className='rel'>
          <TopAbout />
        </Col>
        <Col md={12} xs={12}>
          <CenterAbout />
        </Col>
        <Col md={12} xs={12}>
          <BottomAbout />
        </Col>
      </Row>
    </>
  )
}

export default AboutScreen
