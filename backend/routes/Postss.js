const express= require('express')

const api_helper = require('../API_helper')

const router = express.Router();
const {signup} = require ("../controllers/auth.js")
const {login} = require ("../controllers/Login.js")

router.post("/signup",signup)

router.post("/login",login)

// Post module


const Posts = require('../models/posts');

router.get('/', async (request,response) => {
    
    try{
        const posts = await Posts.find();
        if (!posts) throw Error ('no items')
        response.status(200).json(posts)
    }
    catch{
        response.status(400).json({message: "error"})

    }
});

router.get('/getrecipe', (req, res) => {
    api_helper.make_API_call("https://api.edamam.com/search?q=''&app_id=01797b84&app_key=7b04083469260c0803c24979c75b69fb")
    .then(response => {
        // var parsedbody = JSON.parse(body);
        // var recipe=parsedbody['recipe']
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})
// Get specific id
router.get('/:id', async (request,response) => {
    
    try{
        const post = await Posts.findById(request.params.id);
        if (!post) throw Error ('no items')
        response.status(200).json(post)
    }
    catch{
        response.status(400).json({message: "error"})

    }
});
    
// delete post
router.delete('/:id', async (request,response) => {
    
    try{
        const post = await Posts.findByIdAndDelete(request.params.id);
        if (!post) throw Error ('no post found')
        response.status(200).json({success:'true'})
    }
    catch{
        response.status(400).json({message: "error"})

    }
});
//    update post
router.patch('/:id', async (request,response) => {
    
    try{
        const post = await Posts.findByIdAndUpdate(request.params.id, request.body);
        if (!post) throw Error ('something went wrong while updating post')

        response.status(200).json({success:'true'})
    }
    catch{
        response.status(400).json({message: "error"})

    }
});
    


// create post
router.post('/', async (request,response) => {
    // console.log(request.body)

    const newPost = new Posts(request.body)
    try{
        const post = await newPost.save();
        if (!post) throw Error ('Something went wrong')
        response.status(200).json(post)
    }
    catch{
        response.status(400).json({message: "error"})

    }

    


});


module.exports= router