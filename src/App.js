import React, { useEffect, useState, createContext } from 'react';
import TopNavigation from './components/TopNavigation';
import MainRouter from './components/Router.js'; 
import './App.css';  

export const LightModeContext = createContext();

function App() {

  const [lightMode, setLightMode] = useState('dark');

  useEffect(() => {
    if (lightMode === 'light') {
      document.documentElement.style.setProperty('--bg-color', '#eeeeee');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#121212');
    }
   
  }, [lightMode])
  
  return (
    <LightModeContext.Provider value={{lightMode, setLightMode}}>  
      <div id="child_root"> 
        <TopNavigation/>
        <MainRouter className="MainRouter"/> 
      </div>
    </LightModeContext.Provider>
  );
}

export default App;