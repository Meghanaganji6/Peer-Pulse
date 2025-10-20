import React from "react";
import "./TopicCard.css";

function TopicCard({ title, votes }) {
  return (
    <div className="topic-card">
      <h4>{title}</h4>
      <p>{votes} votes</p>
      <button className="view-btn">View</button>
    </div>
  );
}

export default TopicCard;
