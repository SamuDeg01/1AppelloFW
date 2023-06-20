import React from "react";
import PostContainer from "../components/PostContainer";
import {useState, useEffect} from "react";
import NewPost from "../components/NewPost";

export default function Home({loggedUser}) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/api/posts/all')
            .then(res => {
                if (res.ok) return res.json();
                else throw new Error('Si è verificato un errore nella comunicazione con il server');
            })
            .then(obj => {
                setLoading(false)
                setPosts(obj)
            })
            .catch(error => {
                setLoading(false)
                setError(true)
            })
    }, [])

    function addComment(description, postId) {
        fetch('http://localhost:3000/api/posts/addComment', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                author: loggedUser._id,
                description: description,
                postId: postId
            })
        })
            .then(res => res.json())
            .then(comment => setPosts(posts.map(p => p._id !== postId ? p : {
                ...p,
                comments: [...p.comments, comment]
            })))
    }

    return (
        <div id="post-container">
            <NewPost loggedUser={loggedUser} />
            {loading ? <span>Caricamento in corso...</span> : error ? <span>Errore nel caricamento dei post</span> :
                <PostContainer posts={posts} addComment={addComment} />}
        </div>
    )
}