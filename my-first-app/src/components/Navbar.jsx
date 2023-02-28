import ironhackLogo from '../images/ironhackLogo.png'
import hamburger from '../images/hamburger.png'

function Navbar(){
    return(
        <nav>
            <img src={ironhackLogo} alt="ironhack logo" />
            <img src={hamburger} alt="hamburger logo" />
        </nav>
    )
}

export default Navbar