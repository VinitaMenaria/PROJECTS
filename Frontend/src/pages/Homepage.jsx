import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { fetchProduct } from '../redux/productSlice'
import {useDispatch} from 'react-redux'
import ProductList from '../components/ProductList'
import GridSection from '../components/GridSection'
function Homepage() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  return (
    <div>
   <Navbar/>
   <Hero/>
   {/* <GridSection/> */}
   <Banner/>
   {/* <ProductList/> */}
    </div>
  )
}

export default Homepage