import React from "react";
import "./Topic.css";
import VoteForm from "../components/VoteForm";

function Topic() {
  return (
    <div className="topic-page">
      <h2>Should We Have Night Library? 📚</h2>
      <VoteForm />
    </div>
  );
}

export default Topic;
