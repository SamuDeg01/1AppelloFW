import React from "react";
import Comment from "./Comment";

export default function Post({ data, addComment }) {
  return (
    <>
      <figure className="post">
        <img src={data.imgSrc} />
        <div className="description">
          {data.author && <Comment type="author-description" user={data.author.username} content={data.description} />}
          <div className="comments">
            {data.comments.map((c, i) => <Comment type="comment" user={c.author.username} content={c.description} key={c._id} />)}
            <div className="comment-input">
              <form onSubmit={e => {
                e.preventDefault()
                addComment(e.target.comment.value, data._id)
                e.target.comment.value = ''
              }}>
                <input type="text" name="comment" placeholder="Aggiungi un commento..." />
              </form>
            </div>
          </div>
        </div>
      </figure>
    </>
  )
}