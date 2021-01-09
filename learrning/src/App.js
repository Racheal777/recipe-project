import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from'./Components/Navbar'
import Home from'./Components/Home'
import SignUp from'./Components/SignUp'
import LogIn from'./Components/LogIn'
import Profile from'./Components/Profile'

import Contact from'./Components/Contact'












function App() {
    return (
        <div>
            
           
           
            <Router>
      
      <Navbar/>
      <Switch>
      <Route exact path = "/" component= {Home} />

      <Route path = "/LogIn" component= {LogIn} />

      
      <Route path = "/SignUp" component= {SignUp} />

      <Route path = "/Profile" component= {Profile} />
      <Route path = "/Contact" component= {Contact} />
      {/* <Route path = "/MainPage" component= {MainPage} />
      
      */}

      </Switch>
      </Router>
            
        </div>
    )
}

export default App;
