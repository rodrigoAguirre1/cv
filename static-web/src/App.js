import React from 'react';
import './App.css';
import { LanguageProvider } from './context/Context';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Root } from './routes/Root';
import { FreeTime } from './routes/FreeTime';

export function App() {
  return (
    <LanguageProvider>
      <div className='App' id='HomePDF'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/AboutMe' element={<FreeTime />} />
          <Route path='*' element={<><div style={{ height: '300px' }} /><h1 style={{ color: 'white' }}>Not Found</h1><div style={{ height: '1500px' }} /></>} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider >
  );
}