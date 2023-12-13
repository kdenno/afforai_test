import React from 'react'
import { Navbar } from '../../layouts/navBar'
import { ContentWrapper } from '../../layouts/contentWrapper'
import { Footer } from '../../layouts/footer'
import { HeroSection } from './components/HeroSection'


export function HomePage() {
  return (
    <>
    <Navbar />
    <ContentWrapper>
      <HeroSection />
    </ContentWrapper>
    <Footer />
    </>
  )
}
