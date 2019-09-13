import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurf } from './action';

const App = ({ state, getSmurf }) => {
  return (
    <div className="App">
      <h1>{state.name}</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>
        <button onClick={() => getSmurf()}>Get Your Smurf</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(App);
