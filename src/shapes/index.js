import { PropTypes } from 'react'

export const statusShape = PropTypes.shape({
  isRunning: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
})
