// Initial state
const initialState = { count: 0 };

// Reducer function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'SUBTRACT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

// Redux-inspired store
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

// Create the store
const store = createStore(counterReducer);

// Subscribe to state changes and log to console
store.subscribe(() => {
  console.log('State:', store.getState());
});

// Export the store
module.exports = store;