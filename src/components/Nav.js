import {Link} from 'react-router-dom'

const Nav = ({user}) => {
    const alertNotice = () => (alert(`Hello  ${user}`))
    return (
        <nav>
        <ul class="nav-links">
            <Link to = '/' className= 'link' > 
            <li>HOME</li>
            </Link>
            <Link to = '/about' className= 'link' > 
            <li>ABOUT</li>
            </Link>
            <li className="user" onClick={alertNotice}> 
                Hello <span>{user}</span>
           
            </li>
        </ul>
    </nav>
    )
}

export default Nav
