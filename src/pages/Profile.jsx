import React from "react";
import PostContainer from "../components/PostContainer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { username } = useParams()
  
  useEffect(() => {
    fetch('http://localhost:3000/api/posts/byUsername/' + username)
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
  }, [username])

  return (
    <div id="post-container">
      {loading ? <span>Caricamento in corso...</span> : error ? <span>Errore nel caricamento dei post</span> : (
      <>
        <h1>{username}</h1>
      <PostContainer posts={posts} />
        </>)
      }
    </div>
  )
}