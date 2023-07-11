// import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from './NavBar/navbar';
import Home from './Home/home';
// import Planet from './Planet/planet';
// import Contact from './Contact/contact';
// import {BrowserRouter,Route,Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      
      {/* <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route  path="/home" element={<Home/>}/>
        <Route  path="/planets" element={<Planet/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
