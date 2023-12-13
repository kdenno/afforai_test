import React from 'react'
import PropTypes from 'prop-types'
import styles from './contentContainer.module.css'


export function ContentContainer({children}) {
  return (
    <div className={styles['contentContainer']}>{children}</div>
  )
}

ContentContainer.propTypes = {
    children: PropTypes.node
}

