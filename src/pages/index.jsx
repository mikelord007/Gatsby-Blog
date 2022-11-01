import React from 'react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'

const indexPage = () => {
  return (
    <>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
    </>
  )
}

export default indexPage

export const Head = () => <Seo title="" />