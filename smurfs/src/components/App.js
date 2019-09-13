import React from 'react';
import './App.css';
import SmurfPostForm from './SmurfPostForm';
import SmurfList from './SmurfList';

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <SmurfList />
      <SmurfPostForm />
    </div>
  );
};

export default App;
