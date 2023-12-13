import React from 'react'
import PropTypes from 'prop-types';

const TYPOGRAPHY_VARIANTS = {
  headline: {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: '60px',
  },
  headlineLarge: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: '60px',
  },
  smallHeadline: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: 0.25,
  },
  smallHeadline500: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: 0.25,
  },
  smallHeadline400: {
    fontWeight: 500,
    fontSize: 16,
    color: 'rgb(34, 34, 34)'
},
smallHeadline300: {
  fontWeight: 400,
  fontSize: 16,
  color: 'rgb(82, 82, 82)'
},
  titleMedium: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: 0.1,
      display: 'inline'
  },
  titleSmall: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0.1,
      display: 'inline'
  },
  titleSmall500: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '18px',
      letterSpacing: 0.1,
      display: 'inline'
  },
  titleSmall400: {
    fontSize: 12,
    lineHeight: '18px',
    letterSpacing: 0.1,
    display: 'inline'
},
titleSmall300: {
  fontSize: 13,
  lineHeight: '18px',
  letterSpacing: 0.1,
  display: 'inline'
},
  titleXSmall: {
      fontStyle: 'normal',
      fontWeight: 200,
      fontSize: 9,
      lineHeight: '11px',
      letterSpacing: 0.1,
      display: 'inline'
  },
  bodyLarge: {
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: '24px',
      display: 'inline'
  },
  body: {
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0.25,
      display: 'inline'
  },
  bodySmall: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '16px',
    letterSpacing: 0.1,
    display: 'inline'
},
 
};

export function Typography ({children, sx, variant= 'body', ...restProps}) {
    const customSx = sx || null;

  return (
    <div
     style={{...TYPOGRAPHY_VARIANTS[variant], ...customSx}}
    {...restProps}
    >
      {children}
    </div>
  )
}

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(TYPOGRAPHY_VARIANTS)),
  sx: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
