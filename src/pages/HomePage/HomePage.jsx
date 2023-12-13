import React from 'react'

import { Navbar } from '../../layouts/navBar'
import { ContentWrapper } from '../../layouts/contentWrapper'
import { Footer } from '../../layouts/footer'
import { Gap } from '../../components/ui/Gap'
import { Typography } from '../../components/ui/Typography'
import styles from './homepage.module.css';
import { HeroSection } from './components/heroSection'
import { Slots } from '../../layouts/slots'
import { Card } from '../../components/ui/Card'
import { CARDS_TEXT } from './utils/contants'
import { ContentContainer } from '../../layouts/contentContainer'


export function HomePage() {
  const { biuiltForUser: { card1, card2, card3, card4, card5 }} = CARDS_TEXT;

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
      <ContentContainer>
        <Gap className={styles['builtForUsersGap']}>
          <Slots 
            slots={{
              slotA: <Card sx={{ height: '100%'}} title={card1.title} imgSrc={card1.imgSrc} caption={card1.caption} />,
              slotB: <Card sx={{ height: '100%'}} title={card2.title} imgSrc={card2.imgSrc} caption={card2.caption} />,
            }}
            slotProps={{
              slotA: {style:{...{flex: 1.4}}},
              slotB: {style:{...{flex: 2}}},
            }}
            />
        </Gap>
      </ContentContainer>
        
    </ContentWrapper>
    <Footer />
    </>
  )
}
