import React from "react";
import Hero from './components/Hero'
import Projects from "./components/Projects"
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/Projects" element={<Projects/>} />
    
    </Routes>
  );
}

export default App;
