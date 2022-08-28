import React from 'react';

import 'antd/dist/antd.min.css';

import './App.scss';
import HomePage from './views/HomePage';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
