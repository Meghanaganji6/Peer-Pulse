import React, { useState } from "react";
import "./AddTopic.css";

function AddTopic() {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePreview = (e) => {
    e.preventDefault();
    if (!topic.trim() || !category) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    setShowPreview(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowPreview(false);
    console.log("Submitted:", { topic, category, time: new Date().toLocaleString() });
  };

  return (
    <div className="add-topic-page">
       <div className="neon-background"></div>

    <div className="admin">
      <h2>Admin Panel 🛠️</h2>

      <form>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Events">Events</option>
          <option value="Feedback">Feedback</option>
          <option value="Facilities">Facilities</option>
        </select>

        <input
          type="text"
          placeholder="Enter new topic... 🎉"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <div className="button-row">
          <button onClick={handlePreview}>Preview</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      {error && <p className="error-msg">{error}</p>}

      {showPreview && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>📝 Topic Preview</h3>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Topic:</strong> {topic}</p>
            <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
            <button onClick={handleSubmit}>Confirm Submission</button>
            <button onClick={() => setShowPreview(false)}>Cancel</button>
          </div>
        </div>
      )}

      {submitted && <p className="success-msg">✅ Topic submitted successfully!</p>}
    </div>
    </div>
  );
}

export default AddTopic;