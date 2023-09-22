import './App.css';
import { useState, useEffect } from 'react';

// components import
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="container">
      <Header id="header" title="Welcome to JingoBoards" />
      <Main id="main" />
      <Sidebar id="sidebar" />
      <Footer id="footer" />
    </div>
  );
}


export default App;