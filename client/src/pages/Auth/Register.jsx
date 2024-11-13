import React from 'react'
import styles from "./Login.module.css";
import {Input,Button} from 'antd'
import {useState} from 'react'
import {Link} from 'react-router-dom'
function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const handleSubmit = () => {
    // Add your authentication logic here
    // console.log("Username: ", username, "Password: ", password)
    console.log("register")
  }
  return (
    <div>
      <div className={styles.login_card}>
        <h2>Register</h2>
        <div className={styles.input_inline_wrapper}>
          <Input
           placeholder="First Name"
            value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          <Input
           placeholder="Last Name"
           style={{marginLeft:"10px"}}
            value={lastName} onChange={(e)=> setLastName(e.target.value)} />
        </div>
        <div className={styles.input_wrapper}>
          <Input
           placeholder="Username"
            value={username} onChange={(e)=> setUsername(e.target.value)} />
        </div>
        <div className={styles.input_wrapper}>
          <Input.Password
           placeholder="password"
            value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div className={styles.input_info}>
          Existing User? <Link to="/login">Login</Link>
        </div>
        <Button type="primary"
         size="large" disabled = {!username || !password} onClick={handleSubmit}>Register</Button>
      </div>
    </div>
  )
}

export default Register
