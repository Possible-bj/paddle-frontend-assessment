import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getGithubRepo } from '../actions/githubActions'
import GithubRepoCard from '../components/GithubRepoCard'
import InfiniteScrollComponent from 'react-infinite-scroll-component'

const GithubScreen = () => {
  const dispatch = useDispatch()

  const { error, repos } = useSelector((state) => state.githubMostStarredRepos)

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
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <h1 className='text-center'>Github Repositories</h1>
          </Col>

          {/* Error Message */}
          {error ? (
            <Col md={12} xs={12}>
              {' '}
              <Message>{error}</Message>{' '}
            </Col>
          ) : null}
        </Row>

        <Row className='max-width rel margin-auto'>
          <Col md={12} xs={12}>
            <InfiniteScrollComponent
              className='rel max-width hide-overflow'
              dataLength={repos.length}
              next={() => setPageHandler(1)}
              hasMore={true}
              loader={<Loader />}>
              {/* Repo Data */}
              {repos && repos.length
                ? repos.map((repo) => <GithubRepoCard repo={repo} />)
                : null}
            </InfiniteScrollComponent>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GithubScreen
