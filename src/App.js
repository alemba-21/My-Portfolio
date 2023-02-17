import React from "react";
import Hero from './components/Hero'
import Projects from "./components/Projects"
// import Cards from "./components/Cards";
// import Designs from "./components/Designs";
// import Ecommerce from './components/Ecommerce'
// import API from './components/Api'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Projects" element={<Projects/>} />
      {/* <Route path="/designs-cards" element={<Cards/>} />
      <Route path="/designs-cards2" element={<Cards/>}/>
      <Route path="/designs-cards3" element={<Cards/>}/> */}
      {/* <Route path="/Designs" element={<Designs/>} />
      <Route path="/E-Commerce" element={<Ecommerce/>} />
      <Route path="/API" element={<API/>} /> */}
    </Routes>
  );
}

export default App;
