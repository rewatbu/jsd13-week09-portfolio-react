const skillGroups = [
  {
    title: "FRONTEND",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
    ],
  },
  {
    title: "BACKEND",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    title: "DATABASE",
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "TOOLS",
    skills: [
      "Git / GitHub",
      "VS Code",
      "Figma",
    ],
  },
];

export default function Skills() {

  return (
    <section id="skills" className="section">

      <div className="section-title">
        <span>&gt;</span> SKILLS
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (

          <div className="skill-group" key={group.title}>

            <h3>{group.title}</h3>

            {group.skills.map((skill) => (
              <p key={skill}>
                &gt; {skill}
              </p>
            ))}

          </div>

        ))}

      </div>

    </section>
  );
}