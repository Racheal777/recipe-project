import React from 'react'

import { useState } from 'react'


import '../Components/styles.css'
import Profile from'./Profile'








function SignUp() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState()
    const[signin,setSignin] = useState(false);
  
    const handleEmailInput =(event) => {
      setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
      setPassword(event.target.value)
    }

    function handleSignin(event) {
        event.preventDefault();
        if (email === "kuranchie@gmail.com"&& password === "1234")
          setSignin(true)
        
      }
      
    

    return (
      
        
       
        <div>
          
          {
            signin
            ?
  
        <>
        <Profile/>
        
        </>
        :
            
           
           
           
            
           
            <div className='mainn2'>
            <form className='log-app'>
                
            <h2>Register</h2>
                 <label for="fname"> Name</label><br/>
                 <input type ='text'  placeholder = 'Name'/> <span/> 
                
                 <label for="email"> Email</label><br/>
                <input type ='text' value={email} onChange= {handleEmailInput} placeholder = ' '  />  
                
                <label for="password"> Password</label><br/>
                <input type ='password' value={password} onChange={(event) => handlePasswordInput(event)} placeholder = ' '/>
       
                <button onClick={handleSignin}>SignUp</button>
                   
                   
                   <p>Already have an Account</p>
                  <a href="/LogIn"> Sign In</a>
                   
                   </form>


</div>
           
           
          }
        </div>
    )   
}

export default SignUp
