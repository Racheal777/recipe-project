import React from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom';
import Navbar from'./Components/Navbar'
import Home from'./Components/Home'
import SignUp from'./Components/SignUp'
import LogIn from'./Components/LogIn'
import Profile from'./Components/Profile'

import Contact from'./Components/Contact'
import { Component } from 'react';












class App extends Component{
    render(){
        return(
   
    
        
            
      <HashRouter basename= "/">
                
                <div>
           
           
      
      <Navbar/>
      <hr/>
      <Switch>
      <Route exact path = "/" component= {Home} />

      <Route path = "/LogIn" component= {LogIn} />

      
      <Route path = "/SignUp" component= {SignUp} />

      <Route path = "/Profile" component= {Profile} />
      <Route path = "/Contact" component= {Contact} />
     

      </Switch>
      </div>
      </HashRouter>  
            
      );
    }
}



export default App;
