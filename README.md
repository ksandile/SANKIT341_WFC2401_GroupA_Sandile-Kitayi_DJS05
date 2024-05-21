## How to Run
1. Clone the repository.
2. Navigate to VSC and open terminal then write "node scenarioX.js"  each scenario, where `X` is the scenario number (1, 2, 3, or 4).
3. Observe the console logs to see the state changes as different actions are dispatched.
# Approach

## Reducer
The reducer.js file defines the initial state and a reducer function to handle ADD, SUBTRACT, and RESET actions.

## Store
The store.js file creates a Redux-inspired store with getState, dispatch, and subscribe functions.
The store initializes the state and subscribes to log state changes to the console.

### Scenarios
Each scenario file (scenario1.js, scenario2.js, scenario3.js, scenario4.js) tests specific functionality of the store, such as initial state verification, incrementing, decrementing, and resetting the counter.

### State Management Functions
GetState: Returns the current state.
Dispatch: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
Subscribe: Accepts a function that gets called whenever the state changes. This function logs the new state to the console.

## Functional Programming Principles
The implementation adheres to functional programming principles by using pure functions, avoiding side effects, and ensuring immutability of the state.

## Challenges and Solutions
### Challenges
Implementing a simplified version of Redux: Ensuring the implementation adhered to functional programming principles while remaining concise and understandable.
State Synchronization: Making sure that state changes were correctly reflected and logged in real-time.
### Solutions
Functional Programming: We utilized pure functions and avoided side effects within the reducer to maintain a predictable state management flow.
Subscriptions: Implemented a simple subscription model to ensure all state changes were logged to the console, providing clear visibility into state transitions.

## Conclusion
This project demonstrates the core principles of state management inspired by Redux, focusing on a simplified implementation to manage a tally counter. By following functional programming principles, the implementation ensures a predictable and maintainable state management system.

