import mongoose from "mongoose";

const ImgPost = new mongoose.Schema({
    postId:{type:String,required:true,unique:true},
    artist:{type:String,required:true},
    username:{type:String,required:true},
    title:{type:String,required:true},
    userId : {type:String,required:true},
    userMail:{type:String,required:true},
    prompt:{type:String,required:true},
    photo:{type:String,required:true},
    createdAt: { type: Date, default: Date.now, index: true }
})

const PostSchema = mongoose.model("ImgPost",ImgPost)

export default PostSchema