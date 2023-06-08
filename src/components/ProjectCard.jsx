function ProjectCard({imageUrl, liveUrl, githubUrl, title, children}) {
  return(
    <div className="project_card">
      <img src={imageUrl} className="project_card--img"/>
      <div className="project_card--text_content">
        <h1 className="project_card--title">{title}</h1>
        <p style={{padding: "5px"}}>{children}</p>
        <div className="project_card--button_container">
          {
            liveUrl &&
            <a href={liveUrl} className="button button_link" target="_blank" rel="noreferrer">Live Demo</a>
          }
          {
            githubUrl &&
            <a href={githubUrl} className="button button_link" target="_blank" rel="noreferrer">GitHub</a>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;