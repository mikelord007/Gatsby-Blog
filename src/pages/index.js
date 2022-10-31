import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'

const indexPage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <footer>Hello</footer>
    </>
  )
}

export default indexPage