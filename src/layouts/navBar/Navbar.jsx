import React, { useState } from 'react'

import styles from './navBar.module.css';
import { Button } from '../../components/ui/Button';
import { Typography } from '../../components/ui/Typography';
import { LinkElement } from '../../components/ui/LinkElement';
import { PATHS } from './utils/constants';
import { Logo } from '../../components/ui/Logo';

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
        <div className={styles['header']}>
            <div className={styles['navWrapper']}>

                <nav className={styles['nav']}>

                    <div className={styles['desktopMenu']}>

                        <Logo/>

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
                            
                            <div 
                                aria-label="toggle-mobile-menu" 
                                className={styles['mobileMenuToggler']}
                                style={{border: `solid 1px ${showMobileMenu ? 'rgb(96, 4, 255)' : 'rgb(209, 213, 219)'}`}}
                                onClick={() => setShowMobileMenu(!showMobileMenu)}
                            >
                                <div className={styles['stick']}></div>
                            </div>

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
        </div>
    )
}