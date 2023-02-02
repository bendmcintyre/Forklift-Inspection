import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div id="navbar-container">
          <nav>
            {/* For routing we need match the route name in Route path attribute */}
            <Link to="/inspect">INSPECT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/safety">SAFETY</Link>
          </nav>
        </div>
    )
}