import React from 'react';
import PropTypes from 'prop-types';

const link = {

};

const childLink = {};
Object.keys(link).forEach((key) => {

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
