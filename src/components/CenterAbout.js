import React from 'react'
import { Row } from 'react-bootstrap'

const CenterAbout = () => {
  return (
    <>
      <Row className='rel'>
        <div className='flex max-width margin-auto' style={{ height: '400px' }}>
          <div className='about-center-text text-justify text-white'>
            Metricks was developed because just like you, we needed a product
            that could give us
            <strong className='about-center-text'>good value.</strong>
          </div>
        </div>
      </Row>
    </>
  )
}

export default CenterAbout
