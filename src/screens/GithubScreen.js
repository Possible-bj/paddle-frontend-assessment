import React, { useEffect, useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getGithubRepo } from '../actions/githubActions'
import GithubCard from '../components/GithubCard'

const GithubScreen = () => {
  const dispatch = useDispatch()

  const { loading, error, repos } = useSelector(
    (state) => state.githubMostStarredRepos,
  )

  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getGithubRepo(page))
  }, [dispatch, page])

  const setPageHandler = (adder) => {
    if (adder < 0 && page > 1) {
      setPage((prevState) => prevState + adder)
    }
    if (adder > 0) {
      setPage((prevState) => prevState + adder)
    }
  }

  return (
    <>
      <Row>
        {/* Loader */}
        {loading ? (
          <Col md={12} xs={12}>
            {' '}
            <Loader />{' '}
          </Col>
        ) : null}

        {/* Error Message */}
        {error ? (
          <Col md={12} xs={12}>
            {' '}
            <Message>{error}</Message>{' '}
          </Col>
        ) : null}
      </Row>

      <Row className='max-width rel margin-auto'>
        {/* Repo Data */}
        {repos && repos.length
          ? repos.map((repo) => <GithubCard repo={repo} />)
          : null}
      </Row>

      <Row>
        {repos && repos.length && (
          <Col md={6} xs={12} className='pages margin-auto flex'>
            <Button
              color='primary'
              disabled={page === 1}
              className='margin-auto rel page-btn prev-btn br-6 bg-transparent'
              onClick={() => setPageHandler(-1)}>
              <i className='fas fa-angle-double-left fa-2x'></i>
            </Button>
            <span>Page {page} of Many</span>
            <Button
              color='primary'
              className='margin-auto rel page-btn next-btn br-6 bg-transparent'
              onClick={() => setPageHandler(1)}>
              <i className='fas fa-angle-double-right fa-2x'></i>
            </Button>
          </Col>
        )}
      </Row>
    </>
  )
}

export default GithubScreen
