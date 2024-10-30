import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import React from 'react'


function App() {
  return (
    <div className="bg-custom-bg m-0 p-0 font-sans min-h-screen">
        <Header />
        <Sidebar />
        <Main />
    </div>
  );
}

export default App;
