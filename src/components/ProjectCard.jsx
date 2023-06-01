function ProjectCard({imageSrc, projectURL, title, children}) {
  return(
    <div>
      <img src={imageSrc} />
      <h1>{title}</h1>
      {children}
      <button>Live Demo</button>
      <button>GitHub</button>
    </div>
  )
}

export default ProjectCard;