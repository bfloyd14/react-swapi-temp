//npm modules
import { NavLink, Link } from "react-router-dom"

//css
import './NavBar.css'

const NavBar = () => {
  return ( 
    <header>
      <nav>
        <NavLink>
          <Link to='/'>STAR WARS STARSHIPS</Link>
        </NavLink>
      </nav>
    </header>

  )
}

export default NavBar 