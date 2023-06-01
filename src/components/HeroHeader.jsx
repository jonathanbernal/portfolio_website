import profilePicture from '../assets/profile_picture.png';

function HeroHeader() {
  return(
    <div className="hero_header">
      <img src={profilePicture} alt="Jonathan's profile picture" className="profile_picture" />
      <div className="profile_info">
        <h1>Welcome!</h1>
        <p>I&apos;m Jonathan Bernal</p>
        <p>When it comes down to Software Development, I consider myself a generalist. Coming from an Embedded
          Systems background, I have also delved into Frontend Development. My journey has allowed me to
          become experienced with the following stacks:
        </p>
      </div>
    </div>
  )
}

export default HeroHeader;