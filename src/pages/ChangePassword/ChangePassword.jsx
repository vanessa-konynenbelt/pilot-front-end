import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import styles from './ChangePassword.module.css'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className = "parent-card-group">
      <div className={styles.container}>
        <h1>Change Password</h1>
        <p>{message}</p>
        <ChangePasswordForm {...props} updateMessage={updateMessage} />
      </div>
    </div>
  )
}

export default ChangePassword
