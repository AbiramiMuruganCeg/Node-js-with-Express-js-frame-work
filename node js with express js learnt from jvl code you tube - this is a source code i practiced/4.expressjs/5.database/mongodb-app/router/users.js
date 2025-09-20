const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create user  -- POST /api/users
router.post('/', async (req,res)=>{
    // const data = req.body;
    console.log("body",req.body);
    const user =  new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
    // console.log(saved);
})

//Get all users -- GET /api/users
router.get('/',async (req,res)=>{
    const users = await User.find();
    res.status(201).json(users);
})

//Get single user -- GET /api/users/:id
router.get('/:id',async (req,res)=>{
    // console.log(req.params.id);
    const users = await User.findById(req.params.id);
    res.status(201).json(users);
})
//update user -- PUT /api/users/:id
router.put('/:id', async (req,res)=>{
     console.log("body",req.body);
     const users = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
     res.status(201).json(users);
})

//delete user --  /api/users/:id
router.delete('/:id', async (req,res)=>{
     await User.findByIdAndDelete(req.params.id);
     res.sendStatus(204);
});

module.exports = router;