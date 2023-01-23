import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Samp } from './features/samp/Samp';
import AddStudent from './features/samp/AddStudent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Samp></Samp> */}
        <AddStudent></AddStudent>
      </header>
    </div>
  );
}

export default App;
