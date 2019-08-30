import { createStore, applyMiddleware } from 'redux';

const UPDATE_STATE = 'UPDATE_STATE';

const reducer = (state = 'initial', action) => {
  switch(action.type) {
    case UPDATE_STATE:
      return action.payload;
    default:
      return state;
  }
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myMiddleware = store => next => action => {
  console.log(action);
  const initialState = store.getState();
  next(action);
  const finalState = store.getState();
  if(initialState !== finalState) {
    console.log('New State: ' + finalState);
  }
};

const store = createStore(
  reducer,
  applyMiddleware(myMiddleware)
);

store.dispatch({ type: UPDATE_STATE, payload: 'hi' });
store.dispatch({ type: UPDATE_STATE, payload: 'new' });
store.dispatch({ type: UPDATE_STATE, payload: 'new' });
