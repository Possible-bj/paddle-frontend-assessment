import React from 'react'
import { Row } from 'react-bootstrap'
import Bubble from './Bubble'

const TopAbout = () => {
  return (
    <>
      <Row className='rel'>
        <div
          className='flex about-top max-width margin-auto'
          style={{ height: '550px' }}>
          <div className='about-top-frames rel about-top-frame-left margin-auto max-height'>
            <div className='about-top-blur-box abs br-6'>
              <div className='about-top-about abs margin-auto'>
                _______ ABOUT US
              </div>
            </div>
            <div className='about-top-title abs margin-auto'>
              Built for SaaS <br />
              and E-commerce
            </div>
          </div>
          <div className='about-top-frames rel about-top-frame-right margin-auto max-height flex'>
            <Bubble
              width={150}
              height={150}
              variant={'#1f3265'}
              left={'auto'}
              right={'2%'}
              top={'15%'}
              bottom={'auto'}
              stack={'-1'}
            />
            <div className='about-top-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae gravida ante. Donec porttitor, mauris a eleifend
              bibendum.
            </div>
          </div>
        </div>
      </Row>
    </>
  )
}

export default TopAbout
