// eslint-disable-next-line
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VoteForm from "../components/VoteForm";
import CommentSection from "../components/CommentModal";
import "./Topic.css";

function Topic() {
  const { id } = useParams();

  const topicData = {
    1: "Should We Have Night Library? 📚",
    2: "Is Canteen Food Improving? 🍱",
    3: "Online Attendance Portal — Good Idea? 💻",
  };

  const topicTitle = topicData[id] || "Unknown Topic";

  return (
    <div className="topic-page">
      <h2>{topicTitle}</h2>
      <VoteForm />
      <CommentSection topicId={id} />
    </div>
  );
}

export default Topic;
