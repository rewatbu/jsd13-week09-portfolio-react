import projects from "../data/projects";

export default function Projects() {

  return (
    <section id="projects" className="section">

      <div className="section-heading">

        <div className="section-title">
          <span>&gt;</span> PROJECTS
        </div>

        <span className="view-all">
          VIEW_ALL.exe &gt;
        </span>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <div className="project-image">
              PROJECT_{project.id}
            </div>

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <div className="technology-list">

              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

            <div className="project-links">

              <a href={project.github}>
                GitHub
              </a>

              <a href={project.demo}>
                Live Demo →
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}