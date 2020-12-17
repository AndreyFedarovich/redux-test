// import thunk from 'redux-thunk';
// import dynamic from 'next/dynamic';
import {
  // applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
// import { batchDispatchMiddleware } from 'redux-batched-actions';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

 const configureStore = () => {
  return createStore(
    combineReducers({
      ...reducers
    }),
    composeWithDevTools(compose(
      // applyMiddleware(batchDispatchMiddleware),
    )),
  );
}

export default configureStore
