import logo from '../../assets/logo.webp'
import user from '../../assets/header/user.png'

function Header({name = ''}) {
    return (
        <header id='header'>
            <img src={logo} alt="24/7 Forecast logo" />
            <nav>
                <ul>
                    <li><a href="#hero">Who we are</a></li>
                    <li><a href="#footer">Contacts</a></li>
                    <li><a href="#">Menu</a></li>
                </ul>
            </nav>
            <div>
                <button type="button">Sign Up</button>
                <img src={user} alt="user icon" />
            </div>
        </header>
    )
}

export default Header