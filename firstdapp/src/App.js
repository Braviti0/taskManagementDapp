import './App.css';
import { useState, useEffect } from 'react';

// components import
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {

  return (
    <div className='container'>
      <Header title="Welcome to JingoBoards"/>
      <Main />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;