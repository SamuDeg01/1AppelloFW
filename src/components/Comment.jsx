import React from "react";

export default function Comment({ type, user, content }) {
  return (
    <div className={type}>
      <span className="author">{user}</span>
      <span className="description">{content}</span>
    </div>
  )
}