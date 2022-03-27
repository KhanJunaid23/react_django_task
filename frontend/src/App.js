import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Menu from "./Components/Menu";
import Header from "./Components/Header";

const App = () =>{
  return(
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App;