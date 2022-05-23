import {
  GITHUB_MOST_STARRED_REPO_FAIL,
  GITHUB_MOST_STARRED_REPO_REQUEST,
  GITHUB_MOST_STARRED_REPO_SUCCESS,
} from '../constants/githubConstants'
export const githubMostStarredReposReducer = (
  state = { repos: [] },
  action,
) => {
  switch (action.type) {
    case GITHUB_MOST_STARRED_REPO_REQUEST:
      return { loading: true, repos: [...state.repos] }
    case GITHUB_MOST_STARRED_REPO_SUCCESS:
      return { loading: false, repos: [...state.repos, ...action.payload] }
    case GITHUB_MOST_STARRED_REPO_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
