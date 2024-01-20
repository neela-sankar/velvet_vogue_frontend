import React from 'react'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import TrendingProducts from '../../components/TrendingProducts/FeaturedProducts'

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type='Featured'/>
      <Categories />
      <TrendingProducts type='Trending'/>
      <Contact />
    </div>
  )
}

export default Home