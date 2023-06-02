import profilePicture from '../assets/profile_picture.png';
import TechnologyList from './TechnologyList';

function HeroHeader() {
  const technologyIconList = [
    "devicon:html5", "devicon:css3", 
    "devicon:javascript", "devicon:react",
    "devicon:webpack", "skill-icons:vite-light",
    "devicon:eslint-wordmark", "logos:jest",
    "skill-icons:expressjs-light", "devicon:mongodb",
    "devicon:git",
  ]
  return(
    <div className="hero_header">
      <img src={profilePicture} alt="Jonathan's profile picture" className="profile_picture" />
      <div className="profile_info">
        <h1>Welcome!</h1>
        <p>I&apos;m Jonathan Bernal</p>
        <p>When it comes down to Software Development, I consider myself a generalist. Coming from an Embedded
          Systems background, I have also delved into Frontend Development. My journey has allowed me to
          become experienced with the following technologies:
        </p>
        <TechnologyList list={technologyIconList} />
      </div>
    </div>
  )
}

export default HeroHeader;