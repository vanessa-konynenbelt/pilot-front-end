import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className = "parent-card-group">
      <div className={styles.container}>
        <h2>Log In</h2>
        <p>{message}</p>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
        />
      </div>
    </div>
  )
}

export default LoginPage
