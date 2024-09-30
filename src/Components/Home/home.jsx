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
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
      </div>

      <div className="intro-section">
        <h3>Hello There!</h3>
        <p>I'm Salman Shahid, a product designer crafting user-centric design with pixel-perfect precision.</p>
        <div className="availability">
          <span className="status-indicator"></span>
          Available for Freelancing
        </div>
        <button className="cv-button">Download CV</button>
      </div>

      <div className="companies-section">
        <h4>Skills</h4>
        <div className="company-logos">
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
