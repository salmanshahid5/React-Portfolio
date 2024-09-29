import './footer.css'
import blueThemeLight from '../../../Theme/Theme'

function Footer(){
    return(
    <div className="footer" style={{backgroundColor: blueThemeLight.secondary}}>
    <p style={{color: blueThemeLight.tertiary}}>
        Made with  
        <span style={{color: blueThemeLight.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
            ❤
        </span>
         by Salman
    </p>
</div>
)
}
export default Footer