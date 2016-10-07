import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reducers from './reducers';

let storeWithMiddleware;

if(process.env.NODE_ENV==="development"){
  storeWithMiddleware = applyMiddleware(logger(), reduxThunk)(createStore);
} else {
  storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);
}


export default storeWithMiddleware(reducers);