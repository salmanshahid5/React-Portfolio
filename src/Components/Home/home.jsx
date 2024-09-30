import './home.css'
import profileImage from '../../assets/profile.jpg'; 

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="profile-section">
        <div className="profile-image">
          <img src={profileImage} alt="Bentos Walker" />
        </div>
        <h2>Salman Shahid</h2>
        <p>I am a Web Developer based in Karachi,Pakistan</p>
        <div className="social-links">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
      </div>

      <div className="intro-section">
        <h3>Hello There!</h3>
        <p>I'm Salman Shahid, a passionate Frontend Software Developer 🚀 with a focus on building web and mobile applications using JavaScript, React.js, and other exciting libraries and frameworks.

</p>
        <div className="availability">
          <span className="status-indicator"></span>
          Ready to Take on New Challenges
        </div>
        <button className="cv-button">Download CV <span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path></svg></span></button>
      </div>

      <div className="Skills-Section">
        <h4>Skills</h4>
        <div className="Skills-logos">
          <img src="" alt="HTML" />
          <img src="" alt="CSS" />
          <img src="" alt="JAVASCRIPT" />
          <img src="" alt="REACT" />
          <img src="" alt="BOOTSTARP" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;