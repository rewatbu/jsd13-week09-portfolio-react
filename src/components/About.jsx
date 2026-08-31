export default function About() {

  return (
    <section id="about" className="section">

      <div className="section-title">
        <span>&gt;</span> ABOUT_ME
      </div>

      <div className="about-grid">

        <div className="profile-card">

          <div className="profile-image">
            <img
              src="/profile.jpg"
              alt="Rewat Buranatanit"
            />
          </div>

        </div>

        <div className="system-info">

          <h3>&gt; SYSTEM_INFO</h3>

          <p>
            <span>Name:</span>
            Rewat Buranatanit
          </p>

          <p>
            <span>Role:</span>
            Web Developer
          </p>

          <p>
            <span>Location:</span>
            Thailand
          </p>

          <p>
            <span>Status:</span>
            Available for work <b>■</b>
          </p>

          <button className="terminal-button">
            &gt; DOWNLOAD_RESUME.pdf
          </button>

        </div>

      </div>

    </section>
  );
}