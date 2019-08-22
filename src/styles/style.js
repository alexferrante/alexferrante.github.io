import React from 'react';
import PropTypes from 'prop-types';

const link = {
  normal: {
    
  },
  hover: {
    
  },
  active: 'hover',
  touchActive: {
  
  },
  focusFromTab: {
   
  },
  touchActiveTapOnly: true,
};

const childLink = {};
Object.keys(link).forEach((key) => {
  if (key !== 'touchActiveTapOnly') {
    childLink[`onParent${key.slice(0, 1).toUpperCase()}${key.slice(1)}`] = link[key];
  }
});

export default {
  link,
  childLink,
  p: {
    margin: '3vh 0',
    lineHeight: '1.4',
  },
};

export const Code = ({ children }) => (
  <code
    style={{
      fontFamily: 'monospace',
      fontSize: '15px',
      paddingLeft: '2px',
    }}
  >{children}</code>
);

Code.propTypes = {
  children: PropTypes.string.isRequired,
};
