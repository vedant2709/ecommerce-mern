import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import SubNavbar from './components/SubNavbar'
import MainComponent from './components/MainComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/slice/product'


function App() {
  const dispatch=useDispatch();
  const products=useSelector((state)=>state);
  console.log(products)
  useEffect(async ()=>{
    await dispatch(fetchProducts())
  },[])
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <SubNavbar/>
      <MainComponent/>
    </div>
  )
}

export default App
