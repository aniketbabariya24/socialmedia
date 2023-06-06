const express=require("express");
const { register, allregisterUser, allfriends, login, sendFriendRequest, acceptRequest } = require("../controller/user.controller");
const authentication = require("../middleware/auth");
const userRouter=express.Router()

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('',allregisterUser)
userRouter.get('/:id/friends',allfriends)
userRouter.post('/:id/friends',authentication,sendFriendRequest)
userRouter.patch('/:id/friends/:friendid',acceptRequest)


module.exports=userRouter;