import React from 'react'

import PropTypes from 'prop-types'

export function Gap({children, sx, height, width, ...restProps}) {
    const customSx = sx || null;
    const customHeight = height || 'auto';
    const customWidth = width || 'auto'

  return (
    <div 
        style={{height: customHeight, width: customWidth, ...customSx}}
        {...restProps}
    >
        {children}
    </div>
  )
}
Gap.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
    height: PropTypes.string,
    width: PropTypes.string,
  }
