export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-title">
        <span>&gt;</span> CONTACT_ME
      </div>

      <div className="contact-box">
        <div>
          <div className="contact-item">
            <span>&gt; email:</span>
            <a href="mailto:your@email.com">your@email.com</a>
          </div>

          <div className="contact-item">
            <span>&gt; github:</span>
            <a href="#">github.com/yourusername</a>
          </div>

          <div className="contact-item">
            <span>&gt; linkedin:</span>
            <a href="#">linkedin.com/in/yourprofile</a>
          </div>
        </div>

        <div className="contact-terminal">
          <p>&gt; establish_connection()</p>

          <p>Ready to build.</p>

          <button className="terminal-button">SEND_MESSAGE &gt;</button>
        </div>
      </div>
    </section>
  );
}
