import axios from 'axios'
import {
  GITHUB_MOST_STARRED_REPO_FAIL,
  GITHUB_MOST_STARRED_REPO_REQUEST,
  GITHUB_MOST_STARRED_REPO_SUCCESS,
} from '../constants/githubConstants'

export const getGithubRepo = (page) => async (dispatch) => {
  try {
    const url = `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`

    dispatch({
      type: GITHUB_MOST_STARRED_REPO_REQUEST,
    })

    const { data } = await axios.get(url)
    // console.log(data)

    dispatch({
      type: GITHUB_MOST_STARRED_REPO_SUCCESS,
      payload: data.items,
    })
  } catch (error) {
    dispatch({
      type: GITHUB_MOST_STARRED_REPO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
