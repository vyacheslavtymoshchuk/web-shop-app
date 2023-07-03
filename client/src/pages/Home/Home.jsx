import React from 'react'
import Categories from '../../components/Categories/Categories'
import Info from '../../components/Info/Info'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      {/* <Categories/> */}
      {/* <FeaturedProducts type="trending"/> */}
      <Info />
    </div>
  )
}

export default Home