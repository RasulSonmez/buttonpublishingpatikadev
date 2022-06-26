import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = (props) => {
  return (
    <div>
      <button className={`btntyp-btn ${props.type}`}>{props.text}</button>
    </div>
  )
}
