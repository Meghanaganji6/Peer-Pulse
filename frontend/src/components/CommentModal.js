import React, { useState } from "react";
import "./CommentModal.css";

function CommentModal({ topic, onClose }) {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handlePost = () => {
    if (comment.trim() === "") return;
    const newComment = {
      id: Date.now(),
      text: comment,
      time: new Date().toLocaleTimeString(),
    };
    setCommentsList([newComment, ...commentsList]);
    setComment("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{topic.title}</h2>
        <p className="modal-sub">Join the discussion 💬</p>

        <div className="comment-input">
          <input
            type="text"
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handlePost}>Post</button>
        </div>

        <div className="comment-list">
          {commentsList.length === 0 ? (
            <p className="no-comments">No comments yet. Be the first!</p>
          ) : (
            commentsList.map((c) => (
              <div key={c.id} className="comment-card">
                <p>{c.text}</p>
                <span>{c.time}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
