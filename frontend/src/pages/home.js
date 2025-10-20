import React from "react";
import "./home.css";
import TopicCard from "../components/TopicCard";

function home() {
  const topics = [
    { id: 1, title: "Canteen Food Today?", votes: 125 },
    { id: 2, title: "Should We Have Night Library?", votes: 98 },
    { id: 3, title: "Annual Fest Theme Ideas?", votes: 56 },
  ];

  return (
    <div className="home">
      <header className="hero">
        <h2>What’s the campus mood today? 🌟</h2>
        <p>Vote or share your anonymous pulse on trending campus topics.</p>
        <button className="hero-btn">Start Voting</button>
      </header>

      <section className="topics-section">
        <h3>🔥 Trending Topics</h3>
        <div className="topics-grid">
          {topics.map((t) => (
            <TopicCard key={t.id} title={t.title} votes={t.votes} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default home;
