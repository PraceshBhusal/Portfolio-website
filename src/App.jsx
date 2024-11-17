import React from 'react'

import Navigation from './Navigation/Navigation'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Container/Home/Home'
import Aboutme from './Container/Aboutme/Aboutme'
import Contact from './Container/Contact/Contact'
import Portfolio from './Container/Portfolio/Portfolio'
import Blog from './Container/Blog/Blog'
import Profile from './Profile/Profile'
import Containerbox from './Container/Containerbox'
import Resume from './Container/Resume/Resume'





const App = () => {
  return (
    <>
<BrowserRouter>
<Profile/>
<Containerbox/>
<Navigation/>
<Routes>
<Route path="/Home" element={<Home/>} />
<Route path="/Aboutme" element={<Aboutme/>} />
<Route path="/Resume" element={<Resume/>} />
<Route path="/Portfolio" element={<Portfolio/>} />
<Route path="/Blog" element={<Blog/>} />
<Route path="/Contact" element={<Contact/>} />
</Routes>
</BrowserRouter>    
   

    </>
  )
}

export default App