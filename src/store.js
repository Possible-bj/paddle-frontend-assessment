import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { githubMostStarredReposReducer } from './reducers/githubReducers'

const reducer = combineReducers({
  githubMostStarredRepos: githubMostStarredReposReducer,
})

const middleware = [thunk]
const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
