import React from 'react'
import axios from 'axios'


import { useState } from 'react'
import Profile from './Profile'
import History from './History'


import '../Components/styles.css'







function Login() {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState()
    const[Loggedin,setLoggedin] = useState(false);
  
    const handleEmailInput =(event) => {
      setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
      setPassword(event.target.value)
    }

    function handleLoggedin(event) {
        event.preventDefault();
        if (email === "kuranchie@gmail.com"&& password === "1234")
          setLoggedin(true)
        
      }
     
        axios.get("/login")
          
      
      
    

    return (
      
        
       
        <div>
          
          {Loggedin
            
            ?

            <>
            <Profile/>
            <History/>

            {/* <AddRecipe/> */}

            </> 
            :
            
          
        
            
            <div className='main'>
              
            
            <form className='log-app'>
                
            <h2>Login</h2>

            
 
                <label for="email">Email</label><br/>
  
                <input type ='text' value={email} onChange= {handleEmailInput} placeholder = ' '  />  
                
                <label for="password">Password</label><br/>
                <input type ='password' value={password} onChange={(event) => handlePasswordInput(event)} placeholder = ' '/>
       
               <button onClick={handleLoggedin}>Sign In</button>
                   
                   <p>Don't have an Account</p>
                   
                   <a href="/SignUp">Sign Up</a>
                   
                   </form>


              </div>
           
              
          }
        </div>
    )   
}

export default Login
