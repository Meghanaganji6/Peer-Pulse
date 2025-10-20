import React, { useState } from "react";
import "./VoteForm.css";

function VoteForm() {
  const [selected, setSelected] = useState("");

  return (
    <div className="vote-form">
      <div className="vote-options">
        <button onClick={() => setSelected("yes")} className={selected==="yes"?"active":""}>👍 Yes</button>
        <button onClick={() => setSelected("no")} className={selected==="no"?"active":""}>👎 No</button>
      </div>
      <button className="submit-btn">Submit</button>
    </div>
  );
}

export default VoteForm;
