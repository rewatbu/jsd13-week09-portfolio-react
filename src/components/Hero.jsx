import { useEffect, useState } from "react";

export default function Hero() {

  const text = "I'm Rewat Buranatanit";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let index = 0;

    const timer = setInterval(() => {

      setDisplayText(text.slice(0, index + 1));

      index++;

      if (index === text.length) {
        clearInterval(timer);
      }

    }, 80);

    return () => clearInterval(timer);

  }, []);

  return (
    <section id="home" className="hero">

      <div className="terminal-intro">

        <p className="terminal-line">
          &gt; initializing portfolio.exe...
        </p>

        <p className="terminal-line">
          &gt; connection established.
        </p>

        <p className="hello">
          Hello, World! 👋
        </p>

        <h1>
          {displayText}
          <span className="cursor">█</span>
        </h1>

        <h2>
          Web Developer | Problem Solver | Lifelong Learner
        </h2>

        <p className="hero-description">
          I build things for the web.
        </p>

        <div className="terminal-box">

          <div className="terminal-header">
            <span>●</span>
            <span>●</span>
            <span>●</span>

            <small>~/about_me.txt</small>
          </div>

          <div className="terminal-content">

            <p>&gt; whoami</p>

            <p>
              Developer with a passion for building clean,
              functional, and user-friendly web applications.
            </p>

            <p>
              I love turning ideas into real products.
            </p>

            <p>
              Always learning. Always coding.
            </p>

            <p>&gt; cat mission.txt</p>

            <p>
              Code with purpose. Solve real problems.
              Make impact.
            </p>

            <p>
              &gt; <span className="cursor">█</span>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}