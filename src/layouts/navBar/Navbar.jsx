import React, { useState } from 'react'

import styles from './navBar.module.css';
import { Button } from '../../components/ui/Button';
import { Typography } from '../../components/ui/Typography';
import { LinkElement } from '../../components/ui/LinkElement';
import { PATHS } from './constants';

export function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const navLnks = PATHS.map((lnk) => {
        const anchor = lnk.anchor || null;
        const isExternalLink = lnk.target

        return (
            <li key={lnk.label}>
                {
                    isExternalLink ?  
                        <a target={lnk.target}
                        rel='noopener noreferrer'
                        href={lnk.to}
                        aria-label={`${lnk.label}`}
                        >
                            <Typography variant='titleSmall500'>
                                {lnk.label}
                            </Typography>
                        </a> 
                        : 
                        <LinkElement 
                            to={lnk.to}
                            anchor={anchor}
                            aria-label={`${lnk.label}`}
                        >
                            <Typography variant='titleSmall500'>
                                {lnk.label}
                            </Typography>
                        </LinkElement>   
                }
            </li>
        )
    })

    return (
        <div className={styles['navWrapper']}>

            <nav className={styles['nav']}>

                <div className={styles['desktopMenu']}>

                    <div className={styles['logo']}>

                        <picture aria-label="site-logo"> 
                            <source srcSet="/images/logo-new-violet.png" />
                            <img src="/images/logo-new-violet.png" height="25" width="25" alt="site-logo" />
                        </picture>

                        <div className={styles['title']}>
                            <LinkElement to='/' aria-label="to-home-page">
                                <Typography variant='smallHeadline500'>Afforai</Typography>
                            </LinkElement>
                        </div>

                    </div>

                    <div className={styles['navLinks']}>
                        <ul>
                            {navLnks}
                        </ul>
                    </div>

                    <div className={styles['navActions']}>

                        <Button 
                            aria-label="login" 
                            btnText="Log in" 
                            sx={{marginRight: 8}} 
                            className={styles['navActionsBtn']} 
                            component="link"
                            to="/login"
                        />
                        <Button 
                        aria-label="try-for-free" 
                        btnText="Try for free" 
                        variant="primary"
                        className={styles['navActionsBtn']}  
                        component="link"
                        to="/signup"
                        />
                        
                        <button 
                            aria-label="toggle-mobile-menu" 
                            className={styles['mobileMenuToggler']}
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                        >
                            MM
                        </button>

                    </div>

                </div>

                <div 
                    className={styles['mobilenavLinks']}
                    style={{display: `${showMobileMenu ? 'block' : 'none'}`}}
                >
                    <ul>
                        {navLnks}
                    </ul>
                </div>

            </nav>
        </div>
    )
}