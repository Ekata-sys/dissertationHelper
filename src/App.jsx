import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css';
import BlogsPage from './Components/BlogsPage'
import Article from './Components/Article'
import OrderNow from './Components/OrderNow'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogpage" element={<BlogsPage/>}/>
        <Route path="/article" element={<Article/>}/>
        <Route path="/ordernow" element={<OrderNow/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
