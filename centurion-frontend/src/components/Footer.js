import "./Footer.css";

export default function Footer() {
  return (
    <footer class="footer">
  <div class="footer-wrapper">

    <div class="footer-card brand">
      <h2>CENTURION</h2><br/>
      ️
      <p>
        Learn, practice, and master competitive programming with structured problems
        and real-world coding challenges.
      </p>
    </div>

    <div class="footer-card links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/competitive">Competitive Coding</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div class="footer-card query">
      <h3>Have a Query?</h3>
      <form>
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Query" rows="3" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>

  <div class="footer-bottom">
    © 2026 Centurion. Built for learning, not plagiarism.
  </div>
</footer>


  );
}
