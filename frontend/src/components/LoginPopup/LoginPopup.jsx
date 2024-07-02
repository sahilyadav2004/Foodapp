import React,{ useContext, useState} from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
const LoginPopup = ({setshowLogin}) => {
    const {url,settoken}=useContext(StoreContext)
    const [currState, setcurrState] = useState("Login")
const [data, setdata] = useState({
    name:"",
    email:"",
    password:""
})

const onChangeHandler=(event)=>{
    const name=event.target.name 
    const value=event.target.value
    setdata(data=>({...data,[name]:value}))
}
const onLogin=async (event)=>{
    event.preventDefault()
    let newUrl=url;
    if (currState==="Login") {
        newUrl+="/api/user/login"
    }
    else{
        newUrl+="/api/user/register"
    }
    const response=await axios.post(newUrl,data)
    if(response.data.success){
        settoken(response.data.token);
        localStorage.setItem("token",response.data.token)
        setshowLogin(false)
    }
    else{
        alert(response.data.message)
    }
}
  return (

    <div className='login-popup'>
    <form  onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img src={assets.cross_icon} alt='' onClick={()=>setshowLogin(false)}/>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:
            <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder="Username" required />}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email" required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Confirm Password"  required/>

        </div>
        <button type='submit' >{currState==="Sign Up"?"Create account":"Login"}</button>
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
