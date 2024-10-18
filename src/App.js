import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import ProductPage from "./pages/ProductPage";
import Errorpage from "./pages/Errorpage";
function App() {
  return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<MainContent/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="*" element={<Errorpage/>}/>
       </Routes>
       </BrowserRouter>
    
  )
}

export default App;
