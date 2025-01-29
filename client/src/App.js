import React from 'react';
import './App.css';
import './index.css';
import LandingLayout from './landingPage/LandingLayout';  // Import the LandingLayout instead of individual components

function App() {
  return (
    <div className="App">
      <LandingLayout />  {/* Render the LandingLayout component */}
    </div>
  );
}

export default App;
