import React from "react";
import "./Admin.css";

function Admin() {
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

export default Admin;
