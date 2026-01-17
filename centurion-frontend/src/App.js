import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import StudentProfile from "./pages/StudentProfile";


export default function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<h2>Leaderboard</h2>} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/courses" element={<h2>My Courses</h2>} />
        <Route path="/practice" element={<h2>Practice</h2>} />
        <Route path="/contests" element={<h2>Contests</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/features" element={<h2>Features</h2>} />
        <Route path="/contact" element={<h2>Contact</h2>} />
        <Route path="/student-profile" element={<StudentProfile />} />
      </Routes>
    </>
  );
}
