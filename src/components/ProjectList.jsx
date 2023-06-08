import ProjectCard from "./ProjectCard";

function ProjectList({ list }) {
  return(
    <div className="project_list">
      <ProjectCard title="Exercise Tracker"
        imageUrl="https://github.com/jonathanbernal/exercise-tracker/raw/main/public/website_preview.PNG"
        liveUrl="https://exercise-tracker-production-0602.up.railway.app/"
        githubUrl="https://github.com/jonathanbernal/exercise-tracker"
      >
        This is a REST API that allows users to create users, add exercises, and retrieve exercise logs. It is based
        on MongoDB and Express.js.
      </ProjectCard>
      <ProjectCard title="Etch-A-Sketch"
        imageUrl="https://github.com/jonathanbernal/Etch-A-Sketch/raw/main/website_preview.PNG"
        liveUrl="https://jonathanbernal.github.io/Etch-A-Sketch/"
        githubUrl="https://github.com/jonathanbernal/Etch-A-Sketch"
        
      >
        A clone of an Etch-A-Sketch program that lets you dry on a grid and adjust its size for more precision. 
        Pssst. Try out the rainbow brush!
      </ProjectCard>
      <ProjectCard
        title="Library"
        imageUrl="https://github.com/jonathanbernal/library/raw/main/assets/library_app_demo_v1.PNG"
        liveUrl="https://jonathanbernal.github.io/library/"
        githubUrl="https://github.com/jonathanbernal/library"
      >
        A library web page where you can add books to a list. Each book can be marked
        as read/unread and updated later if need be. The books are added by title, 
        author, and number of pages.
      </ProjectCard>
      <ProjectCard 
        title="Admin Dashboard"
        imageUrl="https://github.com/jonathanbernal/admin-dashboard/raw/main/assets/admin_dashboard_readme_screenshot.PNG"
        liveUrl="https://jonathanbernal.github.io/admin-dashboard/"
        githubUrl="https://github.com/jonathanbernal/admin-dashboard"
        
      >
        A dashboard implemented based on the requirements of a Figma design. It features CSS Flexbox and Grid concepts
        as well as animations for the buttons and some of the panels.
      </ProjectCard>
      <ProjectCard
        title="Rock Paper Scissors"
        imageUrl="https://github.com/jonathanbernal/rock-paper-scissors/raw/main/assets/images/website-preview.PNG"
        liveUrl="https://jonathanbernal.github.io/rock-paper-scissors/"
        githubUrl="https://github.com/jonathanbernal/rock-paper-scissors"
      >
        A classic implemention of Rock, Paper, Scissors with sound effects. It introduces DOM manipulation, audio
        elements, and event handlers.
      </ProjectCard>
    </div>
  ) 
}

export default ProjectList;