import React from 'react'
import { Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const BottomAbout = () => {
  return (
    <>
      <Row className='rel'>
        <div
          className='flex about-bottom max-width margin-auto'
          style={{ height: '550px' }}>
          <div className='about-bottom-frames about-bottom-frame-left margin-auto max-height flex'>
            <div className='about-bottom-content rel'>
              <h2 className='text-white'>
                <span>01</span>
                <span>WHY US?</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae gravida ante. Donec porttitor, mauris a
                eleifend bibendum.
              </p>
              <br />
              <div
                className='text-center dots  abs max-width margin-auto centered-bottom'
                style={{ fontWeight: '900' }}>
                <strong>
                  . . . . . . . . . . . . . . . . . . . . . <br />
                  . . . . . . . . . . . . . . . . . . . . . <br />
                  . . . . . . . . . . . . . . . . . . . . . <br />
                  . . . . . . . . . . . . . . . . . . . . . <br />
                  . . . . . . . . . . . . . . . . . . . . . <br />
                </strong>
              </div>
            </div>
          </div>
          <div className='about-bottom-frames rel p-5 about-bottom-frame-right margin-auto max-height'>
            <div className='about-bottom-blur-box abs br-6'></div>
            <div className='about-bottom-content'>
              <h2 className='text-white'>
                <span>02</span>
                <span>GROWING WITH YOU?</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae gravida ante. Donec porttitor, mauris a
                eleifend bibendum.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vestibulum vitae gravida ante. Donec porttitor.
                mauris a eleifend bibendum.
                <br />
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae gravida ante. Donec porttitor, mauris a
                eleifend bibendum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className='about-bottom-contact margin-auto max-height max-width flex flex-column justify-content-center p-5'>
          <h1 className='text-capitalize text-white'>Got a Question?</h1>
          <p className='about-bottom-contact-pg'>
            See how Metricks can help your business grow with best affiliate
            marketing tracking software.
          </p>
          <LinkContainer to='/contact'>
            <div className='about-bottom-contact-link'>
              Contact Us <i className='fa fa-long-arrow-alt-right'></i>
            </div>
          </LinkContainer>
        </div>
      </Row>
    </>
  )
}

export default BottomAbout
