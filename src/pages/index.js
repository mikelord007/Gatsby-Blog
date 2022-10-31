import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const indexPage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default indexPage