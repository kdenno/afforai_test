import React from 'react'
import { Navbar } from '../../layouts/navBar'
import { ContentWrapper } from '../../layouts/contentWrapper'
import { Footer } from '../../layouts/footer'
import { HeroSection } from './components/HeroSection'
import { Gap } from '../../components/ui/Gap'
import { Typography } from '../../components/ui/Typography'
import styles from './homepage.module.css';


export function HomePage() {
  return (
    <>
    <Navbar />
    <ContentWrapper>
      <HeroSection />
      <Gap className={styles['appUsersGap']}>
        <div className={styles['appUsers']}>
        <Typography variant="smallHeadline400" sx={{color: 'rgb(82, 82, 82)', fontWeight: 'unset'}}>
          Loved by <span style={{color: 'rgb(128, 54, 255)'}}>20,000+</span> users around the world
        </Typography >
        <img src="/images/laptop-landing-2.png" width="330" height="20" alt="AppSumo" />
        </div>
      </Gap>
    </ContentWrapper>
    <Footer />
    </>
  )
}
