import ProjectList from "./ProjectList";

function FeaturedProjects() {
  return (
    <div className="featured_projects">
      <h2 className="featured_projects--title">Featured Projects</h2>
      <p className="featured_projects--description">Here are my most recent projects. For a more comprehensive list, please feel
        free to head to my <a>Projects</a> section.
      </p>
      <ProjectList />
    </div>
  )
}

export default FeaturedProjects;