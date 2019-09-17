import React from 'react';
import './App.css';
import SmurfPostForm from './SmurfPostForm';
import SmurfList from './SmurfList';

const App = () => {
  return (
    <div className="App">
      <h1> Smurf-Tastic!!</h1>

      <SmurfList />
      <SmurfPostForm />
    </div>
  );
};

export default App;
