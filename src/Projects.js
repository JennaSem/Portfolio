function Projects({ showProject }) {
  return (
    <div className="image-container">
      {showProject.map((element) => {
        const { id, name, demoLink, title, image } = element;

        return (
          <div className="projects-card" key={id}>
            <div className="image">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} />
              </a>
              <div className="projects-modal">
                <div>
                  <h3>{name}</h3>
                  <h4>{title}</h4>
                  <div className="project-link">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="button-small"
                    >
                      View demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Projects;
