import React from 'react'
import Navbar from '../../components/Navbar'
import {Link} from 'react-router-dom'
// import landing from '../../assets/landing.jpg';
import styles from './Landing.module.css';
function Landing() {
  return (
    <div>
      <Navbar active={"home"}/>
      
      <div className={styles.landing_wrapper}>
        <div  className={styles.landing_text}>
          <h1>Schdule your Daily Tasks with <span className='primaryText'>ToDo!</span></h1>
          <div className='btnWrapper'>
            <Link to="/register" className="primaryBtn">Register</Link>
            <Link to="/login" className="secondaryBtn">Login</Link>
          </div>

        </div>
        {/* <div className={styles.landing_img}>
          <img src={landing} alt="landing" />
        </div> */}
      </div>
    </div>
  )
}

export default Landing
