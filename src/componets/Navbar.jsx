import discordLogo from '../assets/discord-logo-white.png';
import menuIcon from '../assets/menu-icon.png';
import './Navbar.css';

function Navbar(){
    return(
        <nav className='navbar'>
        <img className='discord-logo' src={discordLogo}></img>
        <img className='menu-icon' src={menuIcon} />
        </nav>
    );
}

export default Navbar;