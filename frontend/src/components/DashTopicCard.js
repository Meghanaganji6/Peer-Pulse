import React from "react";
import "./DashTopicCard.css";

function DashTopicCard({ topic, onClick }) {
  return (
    <div className="topic-card" onClick={onClick}>
      <h4>{topic.title}</h4>
      <p className="topic-sub">Click to view insights 📊</p>
    </div>
  );
}

export default DashTopicCard;
