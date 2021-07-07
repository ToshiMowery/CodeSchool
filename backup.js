var fs = require("fs");
const {Post, Thread} = require('./model')
//pull all threads
masterList = []
function toGrabThread(){
    //code
    console.log("Getting the Threads");
    Thread.find({}, (err, thread)=>{
        if (err){
            console.log("There was an error getting the Threads")
            res.status(500).send(
                JSON.stringify({message:"Unable to grab the threads",
                error:err})
            );
            return;
        }
        // res.status(200).json(thread);
        masterList.push(thread);
        req.local = {
            error: "this is my error message"
        }
        next();
    });
    //masterList.push(thread)
}
function toGrabPosts(){
    //code
    console.log("Getting the Posts");
    Post.find({}, (err, post)=>{
        if (err){
            console.log("There was an error getting the Posts")
            res.status(500).send(
                JSON.stringify({message:"Unable to grab the posts",
                error:err})
            );
            return;
        }
        // res.status(200).json(thread);
        masterList.push(post);
        req.local = {
            error: "this is my error message"
        }
        next();
    });
    //masterList.push(post)
}
function deleteDatabase(){
    //code
}
function createThreads(){
    //code
}
function createPosts(){
    //code
}
//pull posts from specific thread
