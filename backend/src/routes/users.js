import express from 'express';
import { UserModel } from '../mongodbModels/Users.js';

const userRouter = express.Router();

userRouter.post("/register", async(req, res)=> {
    const {name, username, password} = req.body;

    const user = await UserModel.findOne({ username });
    if(user)
    {
       return  res.status(201).json("User already Registered. Please Login");

    }
    else {
        const newUser = new UserModel({ name, username, password});
        await newUser.save();
        return res.status(200).json("Sign in");
    }
   
});


userRouter.post("/login", async(req, res) => {
    const {username, password } = req.body;
    const user = await UserModel.findOne({username});
    if(user)
    {
    console.log(user);
    const target = password === user.password;
    if(target)
    {
        // return res.json("Login Successfully");
       return res.status(200).json({ message: 'Login successful' });
    }
    else
    // return res.json("Wrong credentials");
    return res.status(401).json({ message: 'Invalid password' });
}
else
// return res.json("User not found");
return res.status(404).json({ message: 'User not found' });
});


export {userRouter};