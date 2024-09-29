import blueThemeLight from "../../Theme/Theme";
import './home.css'
function Home() {
  return (
    <div className="home" style={{ backgroundColor: blueThemeLight.secondary
       }}>
      <h5 style={{ fontFamily: 'Shadows Into Light',color:blueThemeLight.tertiary }} className="greeting">Hi This is</h5>
      <h2 style={{ fontFamily: 'Source Sans Pro', color:blueThemeLight.primary }} className="name">SALMAN SHAHID</h2>
      <p style={{ fontFamily: 'Shadows Into Light', color: blueThemeLight.tertiary80 }} className="web">Front-end Web Developer</p>
    </div>
  );
}
export default Home;
