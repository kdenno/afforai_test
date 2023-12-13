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
  const { 
    biuiltForUser: { card1, card2, card3, card4, card5 }, 
    accuracySection: { AScard1, AScard2, AScard3 }
  } = CARDS_TEXT;

  return (
    <>
    <Navbar />
    <ContentWrapper>

      <ContentContainer>
        <HeroSection />
      </ContentContainer>

      <Gap className={styles['appUsersGap']}>
        <div className={styles['appUsers']}>
          <Typography variant="smallHeadline300">
            Loved by <span style={{color: 'rgb(128, 54, 255)'}}>20,000+</span> users around the world
          </Typography >
          <img src="/images/laptop-landing-2.png" width="330" height="20" alt="AppSumo" />
        </div>
      </Gap>

      <ContentContainer>

        <Gap className={styles['accuracySection']} sx={{maxWidth: '550px' }}>
          <Gap height="50px">
            <ButtonBadge badgeText="10x your productivity" className={styles['badge']} />
          </Gap>
          <Gap className={styles['headerLineHeights']} sx={{marginBottom: '20px'}}>
            <Typography variant='headlineLarge'>
              Save yourself from stress & streamline your workflow
            </Typography >
          </Gap>
          <Typography variant='smallHeadline300'>
            The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
          </Typography >
        </Gap>

        <Gap className={styles['productivityGap']}>
          <img src="/images/laptop-landing-5.png" width="100%" alt="" />
        </Gap>

        <Gap className={styles['builtForUsersGap']}>
          <Gap height="50px">
            <ButtonBadge badgeText="Why choose us?" sx={{width: '105px', margin: '0 auto'}}/>
          </Gap>
          <Gap className={styles['headerLineHeights']} sx={{marginBottom: '20px'}}>
            <Typography variant='headlineLarge'>
              Built for the user
            </Typography >
          </Gap>
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

        <Gap className={styles['accuracySection']} sx={{maxWidth: '800px'}}>
        <Gap className={styles['headerLineHeights']} sx={{marginBottom: '20px'}}>
            <Typography variant='headlineLarge'>
              Unquestionable accuracy & reliability
            </Typography >
          </Gap>
          
          <Gap className={styles['accuracySection']} sx={{maxWidth: '500px'}}>
            <Typography variant='smallHeadline300'>
              We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.
            </Typography >
          </Gap>
        </Gap>

        <Gap sx={{marginBottom: '100px'}}>
          <Slots 
            slots={{
              slotA: <Card title={AScard1.title} imgSrc={AScard1.imgSrc} caption={AScard1.caption} />,
              slotB: <Card title={AScard2.title} imgSrc={AScard2.imgSrc} caption={AScard2.caption} />,
              slotC: <Card title={AScard3.title} imgSrc={AScard3.imgSrc} caption={AScard3.caption} />,
            }}
          />
        </Gap>


      </ContentContainer>
        
    </ContentWrapper>
    <Footer />
    </>
  )
}
