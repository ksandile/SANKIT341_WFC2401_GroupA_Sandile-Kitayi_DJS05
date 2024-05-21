const store = require('./store');

// Scenario 2: Incrementing the Counter
store.dispatch({ type: 'ADD' }); // Increment the counter
store.dispatch({ type: 'ADD' }); // Increment the counter again