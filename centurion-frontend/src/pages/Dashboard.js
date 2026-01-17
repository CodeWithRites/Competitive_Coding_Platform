import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/dashboard")
      .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(data => setData(data))
      .catch(() => setError("Backend not responding"));
  }, []);

  if (error) return <h3>{error}</h3>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <div style={{ padding: "40px" }}>
        <h2>Welcome {data.username}</h2>
        <p>Total Problems: {data.totalProblems}</p>
        <p>Solved Problems: {data.solvedProblems}</p>
        <p>Rank: {data.rank}</p>
      </div>
      <Footer />
    </>
  );
}
