import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <h2 className="footer-logo">⚡ Centurion</h2>
          <p className="footer-desc">
            College‑focused competitive coding platform built for rankings,
            contests and placements.
          </p>

          <div className="footer-links">
            <div>
              <h4>Company</h4>
              <p>About Us</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>

            <div>
              <h4>Explore</h4>
              <p>Problems</p>
              <p>Contests</p>
              <p>Leaderboards</p>
            </div>

            <div>
              <h4>Learn</h4>
              <p>DSA</p>
              <p>Web Dev</p>
              <p>Languages</p>
            </div>

            <div>
              <h4>Prepare</h4>
              <p>Interviews</p>
              <p>Aptitude</p>
              <p>System Design</p>
            </div>
          </div>
        </div>

        {/* RIGHT QUERY FORM */}
        <div className="footer-right">
          <div className="query-box">
            <h3>Have a Query?</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <button>Send Message</button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 Centurion Coding Platform • Built for Students 🚀
      </div>
    </footer>
  );
}
