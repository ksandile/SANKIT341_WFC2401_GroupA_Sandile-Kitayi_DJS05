const counterReducer = require('./reducer');

function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  // Initialize the state
  dispatch({ type: '@@INIT' });

  return { getState, dispatch, subscribe };
}

// Create the store with the counterReducer
const store = createStore(counterReducer);

// Subscribe to state changes and log to console
store.subscribe(() => {
  console.log('State:', store.getState());
});

module.exports = store;