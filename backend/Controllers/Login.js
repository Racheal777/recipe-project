const User = require("../models/posts.js")
const bcrypt = require('bcrypt')


const authctrl = {}

authctrl.login = async (request,response) => {
    const{email, password} = request.body;

    const user = new User({
        
       
        email:email,
        password: password
    })

    try{
        user.password = bcrypt.hashSync(user.password, 10)
        const newUser = await user.save()
        response.send({
            message: ("User created succesfully"), newUser
        })
    }
        catch (exeption){
            console.log(exeption)
            response.status(500).send({error:"Internal Server Error"})
        }

 
    

    
    
    

}

module.exports=authctrl

