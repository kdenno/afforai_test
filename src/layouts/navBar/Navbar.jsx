import React, { useState } from 'react'
import styles from './navBar.module.css';
import { Button } from '../../components/ui/Button';
import { Typography } from '../../components/ui/Typography';

export function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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
                            <Typography variant='smallHeadline500'>Afforai</Typography>
                        </div>
                    </div>
                    <div className={styles['navLinks']}>
                        <ul>
                        <li><a href="#">Affiliate</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li>Testimonials</li>
                        <li>Help Center</li>
                        </ul>
                    </div>
                    <div className={styles['navActions']}>
                        <Button aria-label="login" btnText="Log in" sx={{marginRight: 8}} />
                        <Button aria-label="try-for-free" btnText="Try for free" variant="primary" />
                        <button aria-label="toggle-mobile-menu" className={styles['mobileMenuToggler']}
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        >MM</button>
                    </div>
                </div>
                <div 
                className={styles['mobilenavLinks']}
                style={{display: `${showMobileMenu ? 'block' : 'none'}`}}
                >
                        <ul>
                        <li><a href="#">Affiliate</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li>Testimonials</li>
                        <li>Help Center</li>
                        </ul>
                    </div>

            </nav>
        </div>
    )
}