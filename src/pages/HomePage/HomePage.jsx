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
import { ButtonBadge } from '../../components/ui/ButtonBadge'


export function HomePage() {
  const { biuiltForUser: { card1, card2, card3, card4, card5 }} = CARDS_TEXT;

  return (
    <>
    <Navbar />
    <ContentWrapper>

      <HeroSection />

      <Gap className={styles['appUsersGap']}>
        <div className={styles['appUsers']}>
          <Typography variant="smallHeadline300">
            Loved by <span style={{color: 'rgb(128, 54, 255)'}}>20,000+</span> users around the world
          </Typography >
          <img src="/images/laptop-landing-2.png" width="330" height="20" alt="AppSumo" />
        </div>
      </Gap>

      <ContentContainer>

        <Gap className={styles['builtForUsersGap']}>
          <Gap height="50px">
            <ButtonBadge badgeText="Why choose us?" />
          </Gap>
          <Typography variant='headlineLarge'>
            Built for the user
          </Typography >
          <Typography variant='smallHeadline300'>
            Afforai is where exceptional customer focus meets exceptional technology.
          </Typography >
        </Gap>

        <Gap className={styles['builtForUsersSlots']}>
          <Slots 
            slots={{
              slotA: <Card title={card1.title} imgSrc={card1.imgSrc} caption={card1.caption} />,
              slotB: <Card title={card2.title} imgSrc={card2.imgSrc} caption={card2.caption} />,
            }}
            slotProps={{
              slotA: {style:{...{flex: 1.4}}},
              slotB: {style:{...{flex: 2}}},
            }}
            />
            <Slots 
            slots={{
              slotAB: {
                AB1: <Card title={card3.title} imgSrc={card3.imgSrc} caption={card3.caption} />,
                AB2: <Card sx={{marginTop: '20px', paddingBottom: '4px'}} title={card5.title} imgSrc={card5.imgSrc} caption={card5.caption} />,
              },
              slotA: <Card title={card4.title} imgSrc={card4.imgSrc} caption={card4.caption} />,
            }}
            slotProps={{
              slotAB: {style:{...{flex: 1.9}}},
              slotA: {style:{...{flex: 1.42}}},
            }}
            />
        </Gap>

      </ContentContainer>
        
    </ContentWrapper>
    <Footer />
    </>
  )
}
