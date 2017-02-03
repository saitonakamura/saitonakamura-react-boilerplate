import React, { PropTypes } from 'react'
import styles from './index.css'

const Hello = ({ who }) => <div className={styles.hello}>Hello {who}!</div>

Hello.propTypes = {
  who: PropTypes.string.isRequired,
}

export default Hello
