import express from "express"
import { Comment } from "./Comments.js"

const CommentRoute = express.Router()

CommentRoute.get("/comment", (req, res)=>{
res.status(200).send({
    message: "Comments route is working",
    status:200,
    data: Comment
})
})


export default CommentRoute;