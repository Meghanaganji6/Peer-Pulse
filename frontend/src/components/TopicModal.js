import React, { useState } from "react";
import "./TopicModal.css";

function TopicModal({ topic, onClose }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleComment = () => {
    if (!input.trim()) return;
    setComments([{ id: Date.now(), text: input }, ...comments]);
    setInput("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{topic.title}</h2>
        <div className="modal-chart">
          {Object.entries(topic.votes).map(([key, value]) => (
            <div key={key} className="modal-bar">
              <span>{key}</span>
              <div className="bar-fill" style={{ width: `${value}px` }}></div>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <div className="comment-section">
          <h4>💬 Comments</h4>
          <div className="comment-input">
            <input
              type="text"
              placeholder="Share your thoughts..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleComment}>Post</button>
          </div>
          <div className="comments-list">
            {comments.length === 0 ? (
              <p>No comments yet. Be the first!</p>
            ) : (
              comments.map((c) => (
                <div key={c.id} className="comment-card">
                  <p>{c.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicModal;
