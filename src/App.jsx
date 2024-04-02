import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Laurels, Menu } from './container';
import { Navbar } from './components';
import './App.css';


function App() {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <Menu />
        <Chef />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
    </div>
  )
}

export default App
