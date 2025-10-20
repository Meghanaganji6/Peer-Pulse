import React, { useState } from "react";
import "./VoteModal.css"; // ✅ reuse same modal CSS (don’t modify your CSS)

function VoteModal({ topic, onClose }) {
  const [yesVotes, setYesVotes] = useState(topic.votesYes || 0);
  const [noVotes, setNoVotes] = useState(topic.votesNo || 0);
  const [voted, setVoted] = useState(false);

  const handleVote = (type) => {
    if (voted) return; // prevent multiple votes
    if (type === "yes") setYesVotes(yesVotes + 1);
    else setNoVotes(noVotes + 1);
    setVoted(true);
  };
   const totalVotes = yesVotes + noVotes;
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{topic.title}</h2>

        <div style={{ marginBottom: "10px" }}>
            <p><strong>Total Votes:</strong> {totalVotes}</p> {/* Added total votes */}
          <p><strong>Yes:</strong> {yesVotes} votes</p>
          <p><strong>No:</strong> {noVotes} votes</p>
        </div>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button className="vote-btn" onClick={() => handleVote("yes")} disabled={voted}>
            👍 Yes
          </button>
          <button className="vote-btn" onClick={() => handleVote("no")} disabled={voted}>
            👎 No
          </button>
        </div>

        {voted && <p style={{ color: "green", marginTop: "10px" }}>Thank you for voting!</p>}

        <button className="comment-btn" onClick={onClose} style={{ marginTop: "15px" }}>
          Close
        </button>
      </div>
    </div>
  );
}

export default VoteModal;
