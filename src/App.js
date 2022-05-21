import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import GithubScreen from './screens/GithubScreen'
import ContactScreen from './screens/ContactScreen'

const App = () => (
  <Router>
    <Header />
    <main className='py-3'>
      <Container>
        <Route path='/' render={() => <Redirect to='/comingsoon' />} exact />
        <Route path='/comingsoon' component={HomeScreen} exact />
        <Route path='/contact' component={ContactScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/github' component={GithubScreen} />
      </Container>
    </main>
    <Footer />
  </Router>
)

export default App
