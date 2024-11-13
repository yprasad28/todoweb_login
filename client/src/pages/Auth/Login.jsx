import React from 'react'
import styles from "./Login.module.css";
import {Input,Button} from 'antd'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import AuthServices from './services/authServices';
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async () => {
    
    try{
      setLoading(true);
      let data = {
        username,
        password
      }
      const response = await AuthServices.loginUser(data);
      console.log(response.data)
      localStorage.setItem('todoAppuser', JSON.stringify(response.data)) 
      message.success("user successfully")    
      navigate('/to-do-list') // replace '/dashboard' with your desired route
       setLoading(false)

    }catch(err){
      console.log(err);
     
      setLoading(false)
    }
  }
  return (
    <div className='login-card'>
      <div className={styles.login_card}>
        <h2>Login</h2>
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
          New User? <Link to="/register">Register</Link>
        </div>
        <Button loading={loading} type="primary"
         size="large" disabled = {!username || !password} onClick={handleSubmit}>Login</Button>
      </div>
    </div>
  )
}

export default Login
