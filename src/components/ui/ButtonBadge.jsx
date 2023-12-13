import React from 'react'

import PropTypes from 'prop-types';
import styles from './uiComponents.module.css';
import { Typography } from './Typography';

export function ButtonBadge({badgeText, sx, ...restProps}) {
    const customSx = sx || null;

  return (
    <div className={styles['buttonBudge']} style={{...customSx}} {...restProps}>
        <Typography variant='titleSmall300'>
            {badgeText}
        </Typography >
    </div>
  )
}
ButtonBadge.propTypes = {
    badgeText: PropTypes.string,
    sx: PropTypes.object
  }