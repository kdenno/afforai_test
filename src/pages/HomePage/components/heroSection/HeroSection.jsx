import React from 'react'

import { Typography } from '../../../../components/ui/Typography'
import { Button } from '../../../../components/ui/Button'
import styles from './heroSection.module.css';
import { Gap } from '../../../../components/ui/Gap';

export function HeroSection() {
  return (
    <div className={styles['hero']}>
        <div className={styles['heroInner']}>
          <div className={styles['sumoCta']}>
            <img src="/images/appsumo.png" width="26" height="20" alt="AppSumo" />
            <span>Now on AppSumo</span>
            <Button 
                aria-label="appsumo-deal" 
                btnText="Get Lifetime Deal"   
                component="link"
                variant="clear"
                className={styles['sumoCtaBtn']} 
                to="https://appsumo.8odi.net/3eR3xn"
              />
          </div>
          <Gap className={styles['customHeader']}>
            <Typography variant='headline' sx={{maxWidth: '659px', margin: '20px auto'}}>
              Your second brain for maximizing productivity
            </Typography>
          </Gap>
          <Typography
            sx={{
                maxWidth: '685px', 
                display: 'block',
                color: 'rgb(82, 82, 82)', 
                margin: '30px auto'
              }} 
              variant='titleMedium'
              >
                Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
           </Typography>
          <div style={{position: 'relative', zIndex: 5}}>
              <Button 
                aria-label="try-for-free" 
                btnText="Try for free" 
                variant="primary"
                sx={{fontSize: '16px', padding: '8px 15px'}}
                className={styles['heroBtn']}  
                component="link"
                to="/signup"
              />
              <Button 
                aria-label="navigate-to-pricing-page" 
                btnText="View Pricing"
                className={styles['heroBtn']} 
                sx={{fontSize: '16px', padding: '8px 15px'}} 
                component="link"
                to="/pricing"
              />
            </div>
        </div>

        <div className={styles['dashImgDiv']}>
          <img src='/images/laptop-landing-1.png' />
        </div>

        <div className={styles['bgImgDiv']}>
          <img src='/images/laptop-landing-3.png' />
        </div>
        
      </div>
  )
}
