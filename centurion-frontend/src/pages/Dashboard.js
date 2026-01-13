import React from "react";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, Student 👋</h1>

      <div style={styles.grid}>
        <div style={styles.card}>Competitive Coding</div>
        <div style={styles.card}>Leaderboard</div>
        <div style={styles.card}>Profile</div>
        <div style={styles.card}>Logout</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    color: "white",
  },
  heading: {
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#020617",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    cursor: "pointer",
    textAlign: "center",
  },
};

export default Dashboard;
