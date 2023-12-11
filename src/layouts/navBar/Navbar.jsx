import React, {useState} from 'react'
import styles from './navBar.module.css';

export function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
    <div className={styles['navWrapper']}>
        <nav className={styles['nav']}>
            <div className={styles['desktopMenu']}>
                <div className={styles['logo']}>
                    <picture aria-label="site-logo"> 
                        <source srcset="/images/logo-new-violet.png" />
                        <img src="/images/logo-new-violet.png" height="25" width="25" alt="site-logo" />
                    </picture>
                    <div className={styles['title']}>Afforai</div>
                </div>
                <div className={styles['navLinks']}>
                    <ul>
                    <li class="crumb"><a href="#">Affiliate</a></li>
                    <li class="crumb"><a href="#">Pricing</a></li>
                    <li class="crumb">Testimonials</li>
                    <li class="crumb">Help Center</li>
                    </ul>
                </div>
                <div className={styles['navActions']}>
                    <button aria-label="login">Log in</button>
                    <button aria-label="try-for-free">Try for free</button>
                    <button className={styles['mobileMenuToggler']}
                     onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >MM</button>
                </div>
            </div>
            <div 
             className={styles['mobilenavLinks']}
             style={{display: `${showMobileMenu ? 'block' : 'none'}`}}
             >
                    <ul>
                    <li class="crumb"><a href="#">Affiliate</a></li>
                    <li class="crumb"><a href="#">Pricing</a></li>
                    <li class="crumb">Testimonials</li>
                    <li class="crumb">Help Center</li>
                    </ul>
                </div>

        </nav>
    </div>)
}