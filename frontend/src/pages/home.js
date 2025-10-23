import React, { useState } from "react";
import "./home.css";
import TopicCard from "../components/TopicCard";

function Home() {
  const [selectedMood, setSelectedMood] = useState("");

  const handleMood = (mood) => {
    setSelectedMood(mood);
  };

  const topics = [
    { id: 1, title: "Canteen Food Today?", votes: 125 },
    { id: 2, title: "Should We Have Night Library?", votes: 98 },
    { id: 3, title: "Annual Fest Theme Ideas?", votes: 56 },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <h2>What’s the campus mood today? 🌟</h2>
        <p>Vote or share your anonymous pulse on trending campus topics.</p>
        <button className="hero-btn">Start Voting</button>
      </header>
    <div className="mood-row">
    {/* Mood Meter Section */}
      <section className="mood-meter">
        <h3>📊 Campus Mood Meter</h3>
        <div className="mood-bar">
          <label>😄 Happy</label>
          <div className="bar happy" style={{ width: "60%" }}>60%</div>
        </div>
        <div className="mood-bar">
          <label>😐 Neutral</label>
          <div className="bar neutral" style={{ width: "25%" }}>25%</div>
        </div>
        <div className="mood-bar">
          <label>😠 Frustrated</label>
          <div className="bar frustrated" style={{ width: "15%" }}>15%</div>
        </div>
      </section>

      {/* Mini Mood Game Section */}
      <section className="mood-game">
        <h3>🎮 Drop Your Vibe</h3>
        <p>How are you feeling today?</p>
        <div className="emoji-picker">
          <button onClick={() => handleMood("happy")}>😄</button>
          <button onClick={() => handleMood("neutral")}>😐</button>
          <button onClick={() => handleMood("frustrated")}>😠</button>
        </div>
        {selectedMood && (
          <p className="mood-confirm">
            You dropped a <strong>{selectedMood}</strong> vibe! Thanks for sharing 💫
          </p>
        )}
      </section>
    </div>
    </div>
  );
}

export default Home;