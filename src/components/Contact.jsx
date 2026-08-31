export default function Contact() {

  return (
    <section id="contact" className="section">

      <div className="section-title">
        <span>&gt;</span> CONTACT_ME
      </div>

      <div className="contact-box">

        <div>

          <p>
            Let's build something amazing together.
          </p>

          <p>
            &gt; email:
            <a href="mailto:your@email.com">
              your@email.com
            </a>
          </p>

          <p>
            &gt; github:
            <a href="#">
              github.com/yourusername
            </a>
          </p>

          <p>
            &gt; linkedin:
            <a href="#">
              linkedin.com/in/yourprofile
            </a>
          </p>

        </div>

        <div className="contact-terminal">

          <p>&gt; establish_connection()</p>

          <p>
            Ready to build.
          </p>

          <button className="terminal-button">
            SEND_MESSAGE &gt;
          </button>

        </div>

      </div>

    </section>
  );
}