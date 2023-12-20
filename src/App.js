import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";

import TextForm from "./components/Textform";
import Login from "./components/Login"



// Browser Router
import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
   const toggleMode =()=>{
    if(mode=="light"){
      setMode('dark');
      document.body.style.backgroundColor ="#101e38";
      document.body.style.color ="white";
      document.title ="TextUtils - Dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      document.body.style.color ="black";
      document.title ="TextUtils - Light mode"
   }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>/
       <TextForm mode={mode}/>
    </>
    // <Router>
    //   <Navbar mode={mode} toggleMode={toggleMode}/>/
    //     <TextForm mode={mode}/>
    //   <Routes>
    //     <Route path="/about" element={<About/>}/>
    //     <Route path="/about" element={<About/>}/>
    //     <Route path="/login" element={<Login/>}/>
    //   </Routes>  
    // </Router>

  );
}

export default App;
