import React from 'react'
import Navbar from './components/Navbar'
import SubNavbar from './components/SubNavbar'
import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <SubNavbar/>
      <MainComponent/>
    </div>
  )
}

export default App
