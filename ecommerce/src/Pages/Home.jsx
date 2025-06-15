import React from 'react'
import Navbar from '../Components/Navbar'
import Announcment from '../Components/Announcment'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
    <Announcment/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Home