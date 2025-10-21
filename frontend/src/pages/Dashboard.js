import React, { useState } from "react";
import "./Dashboard.css";
import TopicCard from "../components/DashTopicCard";
import TopicModal from "../components/TopicModal";

function Dashboard() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Example data (you can later fetch from backend)
  const topics = [
    {
      id: 1,
      title: "Should We Have Night Library?",
      votes: { yes: 120, no: 45, neutral: 30 },
    },
    {
      id: 2,
      title: "Canteen Food Review 🍱",
      votes: { good: 90, bad: 60, average: 20 },
    },
    {
      id: 3,
      title: "Annual Fest Theme 2025 🎉",
      votes: { music: 70, dance: 40, art: 25 },
    },
  ];

  // Get the “hottest” topic (highest total votes)
  const hotTopic = topics.reduce((a, b) =>
    Object.values(a.votes).reduce((x, y) => x + y, 0) >
    Object.values(b.votes).reduce((x, y) => x + y, 0)
      ? a
      : b
  );

  return (
    <div className="dashboard">
      {/* 🏠 Hero Section */}
      <section className="hero-section">
        <h2>🔥 Trending Topic: {hotTopic.title}</h2>
        <div className="chart-container">
          <p className="chart-title">Live Analytics</p>
          <div className="chart-placeholder">
            {/* You can later integrate Chart.js here */}
            <div className="bar">
              {Object.entries(hotTopic.votes).map(([key, value]) => (
                <div
                  key={key}
                  className="bar-segment"
                  style={{ height: value + 20 + "px" }}
                >
                  <span>{key}</span>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🗳️ Topics Section */}
      <section className="topics-grid">
        <h3>All Active Topics</h3>
        <div className="cards-container">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onClick={() => setSelectedTopic(topic)}
            />
          ))}
        </div>
      </section>

      {/* 💬 Modal Popup */}
      {selectedTopic && (
        <TopicModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </div>
  );
}

export default Dashboard;
