import React from 'react'



function contact () {
    return (
        <div>

            <h2>Contact Us</h2>
             <form className='contact-app'>

           


            <p>If you would like to get in touch with us, please fill out your name,
                 email address and message and we will get back to you shortly.</p>

           
            <input type ='text'  placeholder = '  Email'  /> <span/> 
                
                <input type ='text' placeholder = ' subject'/><span/> 

                <input type ='text'  placeholder = 'mesage'style={{height:"200px",resize: 'vertical'}}/> 
       
                   <button >Send message</button>
                   </form>
                   
        </div>
    )
}


export default contact