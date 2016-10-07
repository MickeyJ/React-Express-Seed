import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reducers from './reducers';

export default (
  process.env.NODE_ENV==="development"
    ? applyMiddleware(logger(), reduxThunk)(createStore)(reducers)
    : applyMiddleware(reduxThunk)(createStore)(reducers)
)