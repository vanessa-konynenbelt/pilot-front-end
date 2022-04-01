import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className = "parent-card-group">
      <div className={styles.container}>
        <h2>Sign Up</h2>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </div>
    </div>
  )
}

export default Signup
