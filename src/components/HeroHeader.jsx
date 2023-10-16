import profilePicture from '../assets/profile_picture.png';
import TechnologyList from './TechnologyList';

function HeroHeader() {
  // The list is rendered as a key/value pair, where the icon
  // denotes the name of the Iconify icon to be pulled from their API.
  const technologyIconItems = [
    {
      name: "HTML5",
      icon: "devicon:html5",
    },
    {
      name: "CSS3",
      icon: "devicon:css3",
    },
    {
      name: "JavaScript",
      icon: "devicon:javascript",
    },
    {
      name: "React",
      icon: "devicon:react",
    },
    {
      name: "WebPack",
      icon: "devicon:webpack",
    },
    {
      name: "Vite",
      icon: "skill-icons:vite-light",
    },
    {
      name: "ESLint",
      icon: "devicon:eslint-wordmark",
    },
    {
      name: "Jest",
      icon: "logos:jest",
    },
    {
      name: "Express",
      icon: "skill-icons:expressjs-light",
    },
    {
      name: "MongoDB",
      icon: "devicon:mongodb",
    },
    {
      name: "Git",
      icon: "devicon:git",
    },
  ]

  return(
    <div className="hero_header">
      <img src={profilePicture} alt="Jonathan's profile picture" className="profile_picture" />
      <div className="profile_info">
        <h1 className="hero_header--title">Welcome! 🤝</h1>
        <p className="hero_header--name"><strong>I&apos;m Jonathan Bernal</strong></p>
        <p>When it comes down to Software Development, I consider myself a generalist. Coming from an Embedded
          Systems background, I have also delved into Frontend Development. My journey has allowed me to
          become experienced with the following technologies:
        </p>
        <TechnologyList list={technologyIconItems} />
        <a href="#" className="button button_link">Read my story</a>
      </div>
    </div>
  )
}

export default HeroHeader;