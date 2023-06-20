import React from "react";
import Post from "./Post";

export default function PostContainer({posts, addComment}) {
    return posts.map(p => <Post data={p} key={p._id} addComment={addComment}/>)
}