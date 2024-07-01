import React,{ useState} from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowLogin}) => {
    const [currState, setcurrState] = useState("Login")
  return (

    <div className='login-popup'>
    <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img src={assets.cross_icon} alt='' onClick={()=>setshowLogin(false)}/>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:
            <input type="text" placeholder="Username" required />}
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Confirm Password"  required/>

        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>By continuing ,i agree to the terms of use and privacy policy.</p>
        </div>
        {currState==="Login"?
        <p>Create a new account?  <span onClick={()=>setcurrState("Sign Up")}>Sign Up</span></p>
        :  <p>Already have an account <span onClick={()=>setcurrState("Login")}>Login Here</span></p>
    }
  
      

    </form>
    </div>
  )
}

export default LoginPopup
