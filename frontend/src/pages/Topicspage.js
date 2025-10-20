import React, { useState } from "react";
import "./Topicspage.css";
import { useNavigate } from "react-router-dom";
import CommentModal from "../components/CommentModal";
import VoteModal from "../components/VoteModal";



function Topicspage() {
  const navigate = useNavigate();

  const topics = [
    { id: 1, title: "Should We Have Night Library? 📚", votes: 132 },
    { id: 2, title: "Is Canteen Food Improving? 🍱", votes: 95 },
    { id: 3, title: "Dress Code: Keep or Remove? 👕", votes: 211 },
    { id: 4, title: "Online Attendance Portal — Useful or Not? 💻", votes: 84 },
    { id: 5, title: "Annual Fest Theme Suggestions 🎉", votes: 60 },
  ];
  const [selectedVoteTopic, setSelectedVoteTopic] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="topics-page">
      <h1>Campus Pulse 🔥</h1>
      <p className="topics-subtext">Vote, comment, and share your thoughts!</p>

      <div className="topics-grid">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <h3>{topic.title}</h3>
            <p>{topic.votes} votes</p>
            <div className="card-actions">
             <button
                className="vote-btn"
                onClick={() => setSelectedVoteTopic(topic)}
              >
                🗳️ Vote
            </button>

              <button
                className="comment-btn"
                onClick={() => setSelectedTopic(topic)}
              >
                💬 Comments
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedTopic && (
        <CommentModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
        />
      )}
      {selectedVoteTopic && (
  <VoteModal
    topic={selectedVoteTopic}
    onClose={() => setSelectedVoteTopic(null)}
  />
)}

    </div>
  );
}

export default Topicspage;
