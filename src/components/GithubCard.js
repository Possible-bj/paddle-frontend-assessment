import React from 'react'
// import {Link} from 'react-router-dom'
import { Card, Col, Image, Row } from 'react-bootstrap'
const today = new Date()
const now = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}T`

const GithubCard = ({ repo }) => {
  const parseDate = (str) => {
    var mdy = str.split('T')[0].split('-')
    return new Date(mdy[0], mdy[1] - 1, mdy[2])
  }
  const datediff = (first, second) => {
    return Math.round((second - first) / (1000 * 60 * 60 * 24))
  }

  const dateDiffHandler = (first) => {
    return datediff(parseDate(first), parseDate(now))
  }
  const interval = dateDiffHandler(repo.updated_at)

  return (
    <>
      <Card className='margin-auto rel max-width br-6 mb-2 pb-2'>
        <Row className='margin-auto rel max-width'>
          <Col md={3} xs={3} className='flex justify-content-around'>
            <Image
              className='avatar margin-auto max-width'
              src={repo.owner.avatar_url}
              alt=''
            />
          </Col>
          <Col md={9} xs={9}>
            <Row>
              <Col md={12} className=''>
                <h3> {repo.name} </h3>
                <p>{repo.description} </p>
              </Col>
              <Col md={12}>
                <span>{repo.stargazers_count} Stars</span> {' | '}
                <span>{repo.open_issues} Issues</span> {' | '}
                <span>
                  Submitted{' '}
                  {interval === 1
                    ? `${interval} day ago`
                    : interval === 0
                    ? 'today'
                    : `${interval} days ago`}{' '}
                  by {repo.owner.login}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default GithubCard
