import React from 'react'

import styles from './slots.module.css';

export function Slots(props) {
    const {slots = {}, slotProps = {}} = props;

    const slotAProps = slotProps.slotA || null;
    const slotBProps = slotProps.slotB || null;
    const slotCProps = slotProps.slotC || null;

  return (
    <div className={styles['slots']}>
            {slots.slotA && <div className={styles['slotA']} {...slotAProps}>
                {slots.slotA}
            </div>}
            {slots.slotB && <div className={styles['slotB']} {...slotBProps}>
                {slots.slotB}
            </div>}
            {slots.slotC && <div className={styles['slotC']} {...slotCProps}>
                {slots.slotC}
            </div>}
    </div>
  )
}
