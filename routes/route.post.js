const express=require("express");
const { post, createPost, updatePost, likepost, deletePost, comment, detailofPost } = require("../controller/post.controller");
const authentication = require("../middleware/auth");
const postRouter=express.Router()

postRouter.get('',post)
postRouter.get('/:id',detailofPost)
postRouter.post('',authentication,createPost)
postRouter.put('/:id',authentication,updatePost)
postRouter.delete('/:id',authentication,deletePost)
postRouter.post('/:id/like',authentication,likepost)
postRouter.post('/:id/comment',authentication,comment)

module.exports=postRouter;