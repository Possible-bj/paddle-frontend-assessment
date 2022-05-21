import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
// import { logout } from '../actions/userActions'
import homeLogo from '../resources/images/HomeLogo.png'

const Header = () => {
  return (
    <header>
      <Navbar id='header' expand='sm' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={homeLogo} alt='' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='nav-bar-togggle'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {
                <>
                  <LinkContainer
                    to='/github'
                    className='github nav-screen-links'>
                    <Nav.Link>
                      {/* <i className='fa fa-sign-in-alt' aria-hidden='true'></i> */}
                      Github
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about' className='about nav-screen-links'>
                    <Nav.Link>
                      {/* <i className='fa fa-sign-in-alt' aria-hidden='true'></i> */}
                      About Us
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer
                    to='/contact'
                    className='contact nav-screen-links'>
                    <Nav.Link>
                      {/* <i className='fa fa-sign-in-alt' aria-hidden='true'></i> */}
                      Contact US
                    </Nav.Link>
                  </LinkContainer>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
