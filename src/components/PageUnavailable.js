import React from 'react'
import PropTypes from 'prop-types'

const PropTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageUnavailable( { location }) {
  return (
    <div>
      Page not found
    </div>
  )
}