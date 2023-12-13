import React from 'react'

import PropTypes from 'prop-types';
import styles from './uiComponents.module.css';
import { Typography } from './Typography';

export function ButtonBadge({badgeText}) {
  return (
    <div className={styles['buttonBudge']}>
        <Typography variant='titleSmall300'>
            {badgeText}
        </Typography >
    </div>
  )
}
ButtonBadge.propTypes = {
    badgeText: PropTypes.string,
  }