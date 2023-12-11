import React from 'react'
import PropTypes from 'prop-types'
import styles from './contentWrapper.module.css'


export function ContentWrapper({children}) {
  return (
    <div className={styles['contentWrapper']}>{children}</div>
  )
}

ContentWrapper.propTypes = {
    children: PropTypes.node
}

