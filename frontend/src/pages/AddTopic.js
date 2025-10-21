import React from "react";
import "./AddTopic.css";

function AddTopic() {
  return (
    <div className="admin">
      <h2>Admin Panel 🛠️</h2>
      <form>
        <input type="text" placeholder="Enter new topic..." />
        <button type="submit">Add Topic</button>
      </form>
    </div>
  );
}

export default AddTopic;
